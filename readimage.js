// import webbrowser
// urls=input('url을 입력하세요')
// urls=urls.split(',')
// for i in range(len(urls)):
// 	webbrowser.open(urls[i])

function reading(){
    // const str=confirm();
    var str = document.getElementById('input').value;
    const arr=str.split(",");
    document.writeln(arr.length);

    for(var i=0;i<arr.length;i++){
        document.writeln(arr[i]);
        window.open(arr[i]);
        console.log('클릭됨');

    }
}
//첫번째 페이지만 열림..