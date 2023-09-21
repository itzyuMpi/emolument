let submit = document.querySelector("button.submit");
submit.addEventListener("click", function () {
  let fullName = document.querySelector("input[name=fullName]").value;
  let hour = Number(document.querySelector("input[name=hour]").value);
  let tax = Number(document.querySelector("input[name=tax]").ariaValueMin);
  let degree = document.querySelector("select[name=degree]").value;
  if (degree === "diploma") {
    document.querySelector("h1.answer>span").innerText = hour * "30000" - tax / "100";
  } else if (degree === "highdiploma") {
    document.querySelector("h1.answer>span").innerText = hour * "40000" - tax / "100"
  }else if (degree === "bachelor") {
    document.querySelector("h1.answer>span").innerText = hour * "50000" - tax / "100"
  }else if (degree === "master") {
    document.querySelector("h1.answer>span").innerText = hour * "60000" - tax / "100"
  }else if (degree === "phd") {
    document.querySelector("h1.answer>span").innerText = hour * "100000" - tax / "100"
  } else {
    document.querySelector("h1.answer>span").innerText="گمشو جات اینجا نیست"
  }
});
