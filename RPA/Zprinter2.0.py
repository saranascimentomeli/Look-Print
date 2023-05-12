import datetime
import json
import os
import time
import requests
import timedelta
from buscaCurl import buscarcurl
from buscaCurlTeamLeader import buscarcurlTL
from comum_check_connection import isConnected
from comum_login import Logar_wms
from comum_download import ApagarArquivos, download_lms, json_download_lms, json_download_unidade
from comum_config_browser import configBrowser
from comum_config import GetIniConfig
from comum_sendServer import SendToServer, SendToServerLookHTTPS, SendToServerShipping, SendToServerShippingHTTPS, SendToServerlms, buscaIpsHTTPS
from comum_tratar_arquivo import BuscarIdGestor, TratarArquivoShipping, get_path
from comum_url_download import url_lms
from buscaCurlindiretosSoRep import buscarIndiretos
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import pandas as pd
import socket
import pyperclip as pc
import ping3
import struct


def Printers():

    while True:
        # Obtém a configuração do arquivo ini
        config = GetIniConfig()
        # Busca as impressoras
        IPSs = buscaIpsHTTPS(config)
        lista = json.loads(IPSs)

        results = []
        for elemento in lista:
            impressoraSalva = elemento["Impressora"]
            statusSalva = elemento.get("status", "EM AGUARDO")

            try:
                # Obtém informações da impressora
                url = f'http://{impressoraSalva}/index.html'
                response = requests.get(url, timeout=3)
                soup = BeautifulSoup(response.content, 'html.parser')
                h3_tags = soup.find_all('font')
                descricao = h3_tags[1].text.strip() if len(
                    h3_tags) >= 2 else ""

                # Separa o nome da impressora e seu status
                title = soup.title.text
                Impressora, Status = map(str.strip, title.split("-"))

                # Obtém informações de configuração da impressora
                url = f'http://{impressoraSalva}/config.html'
                response = requests.get(url)
                html = response.text
                soup = BeautifulSoup(html, 'html.parser')
                pre_content = soup.find('pre').get_text()
                tonalidades = pre_content.split('\n')[1].split(' ')[2]
                Velocidades = pre_content.split('\n')[2].split(' ')[2]

                # Verifica se as configurações da impressora precisam ser atualizadas
                tonalidadeConf = config['ConfigLook']['tonalidade']
                velocidadeConf = config['ConfigLook']['velocidade']
                passar = config['ConfigLook']['passar']

                if passar == '1' and (velocidadeConf != Velocidades or tonalidadeConf != tonalidades):
                    # Atualiza as configurações da impressora
                    PRINTER_IP = impressoraSalva
                    PRINTER_PORT = 9100
                    zpl_data = '^XA^~SD' + tonalidadeConf + '^PR' + velocidadeConf + '^XZ'
                    printer_socket = socket.socket(
                        socket.AF_INET, socket.SOCK_STREAM)
                    printer_socket.connect((PRINTER_IP, PRINTER_PORT))
                    printer_socket.send(zpl_data.encode())
                    printer_socket.close()

                # Adiciona as informações da impressora aos resultados
                results.append(
                    f"{impressoraSalva},{Impressora},{Status},{tonalidades},{Velocidades},{descricao},{statusSalva}")
            except (requests.exceptions.Timeout, requests.exceptions.RequestException):
                # Lida com erros de conexão com a impressora
                print(
                    f"Error: could not connect to printer at {impressoraSalva}")

        # Envia os resultados para o servidor
        json_string = json.dumps(results)
        SendToServerLookHTTPS(config, json_string)

        # Espera o tempo configurado antes de continuar
        time.sleep(int(config['sleep']['value']))


def main():
    
    try:
        Printers()
    except:
        main()

main()
