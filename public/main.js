let n =1
getPage.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status ===200){
            const array = JSON.parse(request.response)
            array.forEach(item =>{
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n+=1

        }
    }
    request.send()
}



getJSON.onclick= ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = ()=> {
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
               console.log(request.response)
               const object = JSON.parse(request.response)
               console.log(object)
               myName.textContent = object.name
            }else {
                alert('加载JSON失败')
            }
    }
    
}
request.send()
}


getXML.onclick= ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=> {
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
               const dom = request.responseXML
               const text = dom.getElementsByTagName('warning')[0].textContent
               console.log(text.trim())
            }else {
                alert('加载XML失败')
            }
    }
    
}
request.send()
}

getHTML.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onreadystatechange = ()=>{
        console.log(request.readyState)
        if(request.readyState === 4){
       // 创建 div
        const div = document.createElement('div')
        // 填写 div 内容
        div.innerHTML = request.response
        // 插入 body 中
        document.body.appendChild(div)
    }

    }

    request.send()
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange = ()=>{
        console.log(request.readyState)
        if(request.readyState === 4){
            console.log('下载完成了！')
             // 创建 script 标签
             const script = document.createElement('script')
            // 填写 script 内容
            script.innerHTML = request.response
            // 插入 body 中
             document.body.appendChild(script)
        }

    }
    request.send() // readystate = 2
}

getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css'); // readyState = 1
    request.onreadystatechange = () =>{
        // 下载完成，但是不知道是成功2XX，还是失败4XX 5XX
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
                // 创建 style 标签
                const style = document.createElement('style')
                // 填写 style 内容
                style.innerHTML = request.response
                // 插到 head 里面
                document.head.appendChild(style)

            }else {
                alert('加载CSS失败')
            }
          }
        }
        request.send() // readState = 2
 }

    


