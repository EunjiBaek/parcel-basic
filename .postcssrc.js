// 뒤에 rc(runtime configuration의 약어)가 붙은 파일은 구성 파일을 의미한다. 파일명에 앞에 .을 붙이는건 구성요소 또는 숨김파일이라는 의미이다.


// esm - export, import
// node에서는 commonJS require()

// import autoprefixer from autoprefixer, 생략가능
// const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}








