export default (header) => {
    const right = document.createElement('div')
    right.setAttribute('style', `float: right`)
    const list = ['登录', '注册', '消息通知']
    const ul = document.createElement('ul')
    ul.setAttribute('style', `
        margin: 0;
        padding: 0;
        display: inline-block;
    `)
    header.appendChild(ul)
    list.map((val, key) => {
        const li = document.createElement('li')
        li.innerText = val
        li.setAttribute('style', `
            list-style-type: none;
            display: inline-block;
            cursor: pointer;
            vertical-align: middle;
        `)
        li.addEventListener('mouseenter', () => {
            li.setAttribute('style', `
                ${li.getAttribute('style')}
                color: #fff;
            `)
        })
        li.addEventListener('mouseleave', () => {
            li.setAttribute('style', `
                ${li.getAttribute('style')}
                color: #b0b0b0;
            `)
        })
        const span = document.createElement('span')
        span.setAttribute('style', `
            display: inline-block;
            height: 12px;
            width: 1px;
            background: #424242;
            margin: 0 .6em;
            vertical-align: middle;
        `)
        ul.appendChild(li)
        if (key !== list.length - 1) {
            ul.appendChild(span)
        }
    })
    right.appendChild(ul)
    const div = document.createElement('div')
    div.setAttribute('style', `
        width: 120px;
        height: 40px;
        display: inline-block;
        background: #424242;
        text-align: center;
        margin-left: 30px;
        cursor: pointer;
    `)
    div.addEventListener('mouseenter', () => {
        div.setAttribute('style', `
            ${div.getAttribute('style')};
            background: #fff;
            color: #ff6700;
        `)
    })
    div.addEventListener('mouseleave', () => {
        div.setAttribute('style', `
            ${div.getAttribute('style')};
            background: #424242;
            color: #b0b0b0;
        `)
    })
    div.innerText = '购物车'
    right.appendChild(div)
    header.appendChild(right)
}