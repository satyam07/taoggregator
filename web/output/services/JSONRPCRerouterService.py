import logging
import os
import sys

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG,
        format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
        datefmt='%m-%d %H:%M',
        filename='JSONRPCRerouterService.log',
        filemode='a')

    #Path one above the taoggregator root
    tao_path_up_one = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', '..'))
    sys.path.append(tao_path_up_one)

    import taoggregator
    from taoggregator.clientimpls import SocketClient

    from jsonrpc.cgihandler import handleCGIRequest
    handleCGIRequest(SocketClient(taoggregator.createConnStr(*taoggregator.getDefaultHostAndPort())))
	
