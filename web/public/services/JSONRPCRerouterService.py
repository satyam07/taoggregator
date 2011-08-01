import logging

from taoggregator.clientimpls import SocketClient
import taoggregator

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG,
        format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
        datefmt='%m-%d %H:%M',
        filename='JSONRPCRerouterService.log',
        filemode='a')
    logging.info('Handling CGI request.')
    from jsonrpc.cgihandler import handleCGIRequest
    handleCGIRequest(SocketClient(taoggregator.createConnStr(*taoggregator.getDefaultHostAndPort())))