export default (header) => {
    const headerData = ['小米商城', 'MIUI', 'loT', '云服务', '金融', '有品', '小爱开放平台', '企业团购', '资质证照', '协议规则', '下载app']
    const ul = document.createElement('ul')
    ul.setAttribute('style', `
        margin: 0;
        padding: 0;
        display: inline-block;
    `)
    header.appendChild(ul)
    headerData.map((val, key) => {
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
        if (key !== headerData.length - 1) {
            ul.appendChild(span)
        }
    })
}