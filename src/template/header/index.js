import Left from './tem/left.js'
import Right from './tem/right.js'
export default () => {
    const root = document.getElementById('root')
    const header_box = document.createElement('header')
    header_box.setAttribute('style',
        `background: #333;
        height: 40px;
        position: relative`
    )
    const header = document.createElement('div')
    header.setAttribute('style', 
        `width: 1226px;
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #b0b0b0;
        font-size: 12px;
        line-height: 40px;
        `
    )
    header_box.appendChild(header)
    Left(header)
    Right(header)
    root.appendChild(header_box)
}