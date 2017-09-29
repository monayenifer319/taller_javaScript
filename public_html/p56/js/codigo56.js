$(() => {
  $("#Button").click(() => {
    var smlv = Number($("#SMLV"));
    var salary = Number($("#Salary"));
    var dayjob = Number($("#jobDay"));
    var salaryMin = smlv * 2;
    var salaryMax = smlv * 4;
    var valday = salary / 30;
    if ((salary <= salaryMin) && (dayjob <= 30)) {

    }
  });
});