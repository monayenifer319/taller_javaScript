if (localStorage.getItem("regP56") !== null) {
  data = JSON.parse(localStorage.getItem("regP56"));
  $("#ValTrans").html(data.aidTra);
  $("#TransTotal").html(data.payTrans);
  $("#valDay").html(data.valday);
  $("#totalDay").html(data.paymeday);
  $("#valSalary").html(data.salary);
  $("#totalSalary").html(data.salary);
  $("#valpay").html(data.totalpay);
  $("#total").val(data.totalpay);
  localStorage.clear();
  console.log(data.aidTra + "" + data.pay + "" + data.valday + "" + data.paymeday + "" + data.salary + "" + data.salary + "" + data.totalpay + "" + data.totalpay);
} else {
  data = JSON.parse(sessionStorage.getItem("regP56"));
  $("#ValTrans").html(data.aidTra);
  $("#TransTotal").html(data.payTrans);
  $("#valDay").html(data.valday);
  $("#totalDay").html(data.paymeday);
  $("#valSalary").html(data.salary);
  $("#totalSalary").html(data.salary);
  $("#valpay").html(data.totalpay);
  $("#total").val(data.totalpay);
  sessionStorage.clear();
  console.log(data.aidTra + "" + data.pay + "" + data.valday + "" + data.paymeday + "" + data.salary + "" + data.salary + "" + data.totalpay + "" + data.totalpay);
}