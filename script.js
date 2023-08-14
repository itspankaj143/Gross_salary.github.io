function calculate() {
  let basic = document.getElementById("pay").value;
  let fname = document.getElementById("fname").value;
  //   alert(basic);

  hra = (basic * 5) / 100;
  //   alert(hra);
  da = (basic * 2) / 100;

  ta = (basic * 3) / 100;
  gs = Number(basic) + Number(hra) + Number(da) + Number(ta);
  //   alert(gs);

  document.getElementById("p1").innerHTML = `Name of the Person :- ${fname} <br>
   HRA :-${hra}
   <br>
   DA :-${da}
   <br>
   TA :-${ta}
   <br>
   Gross Salary = ${gs}`;
}
