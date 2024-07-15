import sys
import json
from urllib import request

def main():
    item = json.loads(sys.argv[1])
    filePath = item.get('filePath')
    data = open(filePath, 'rb').read()
    print(data)

if __name__ == '__main__':
    main()