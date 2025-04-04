import opt from 'https://deivyson.me/optmization-js/src/index.js';
const { on, getDOMValue, setData, redirect } = opt;

on('submit', 'form', (e)=>{
    e.preventDefault();
    setData('usuario', getDOMValue('input'));
    redirect('main.html')
});
