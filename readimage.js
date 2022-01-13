import webbrowser
urls=input('url을 입력하세요')
urls=urls.split(',')
for i in range(len(urls)):
	webbrowser.open(urls[i])
	