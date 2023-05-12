import configparser

def GetIniConfig():
    config = configparser.ConfigParser()
    config.read('Config.INI')
    return config