import ssl
import time
import requests
from requests.exceptions import ConnectionError
import certifi
from urllib.request import urlopen


def buscaIpsHTTPS(config):

    try:
        # print("send data to server...")
        data = {'cad': config['cad']['value']}
        r = requests.post(
            str(config['serverLook']['value']), data=data, verify=False)
        return r.text
    except ConnectionError as e:
        print('Erro de conexão...')
        time.sleep(10)
        buscaIpsHTTPS(config)


def SendToServerLookHTTPS(config, lista):

    try:
        print("send data to server...")
        data = {'cad': config['cad']['value'],
                'lista': lista}
        r = requests.post(
            str(config['serverLook']['value2']), data=data, verify=False)
        print(r.text)
        return True
    except ConnectionError as e:
        print('Erro de conexão...')
        time.sleep(10)
        SendToServerLookHTTPS(config, lista)
