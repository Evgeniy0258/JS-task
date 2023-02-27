let arr = ["a", "b"];

arr.push(function () {
    alert(this);
})

arr[2](); // 3 элемента,  сначала их было 2, плюс функция.