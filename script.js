  function func() {
    const number = document.querySelectorAll('input');
    let error_l1st = {}
    let l1st = {}
    let check = false;

    for (let i = 0; i<number.length; i++) {
      if (number[i].value < 1 || number[i].value > 10) {
        error_l1st[i] = number[i];
      }
      else {
        l1st[number[i].name] = number[i].value;
      }
    }
    if (Object.entries(error_l1st).length == number.length) {
      document.querySelector('p').innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    }
    else {
      console.log(error_l1st.length);
      if (error_l1st[0] == undefined) {
        if (error_l1st[1] == undefined) {
          check = true;
        }
        else {
          document.querySelector('p').innerHTML = 'Лимит вне диапазона от 1 до 10';
        }
      }
      else {
        document.querySelector('p').innerHTML = 'Номер страницы вне диапазона от 1 до 10';
      }
    }
    if (check) {
    fetch(`https://picsum.photos/v2/list?page=${l1st['first_num']}&limit=${l1st['second_num']}`)
    .then((response)=>{return response.json();})
    .then((data)=>{console.log(data);})
    .catch(()=>{console.log('error')});}
  }