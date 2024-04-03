$(() => {
  let result = "";
  let output = $("#result");
  $(".button").click((event) => {
    let text = event.target.textContent;
    if (result.length >= 16) {
      result = "";
      output.html("Out of range");
    } else {
      switch (text) {
        case "AC":
          result = "";
          output.html(0);
          break;
        case "CE":
          if (result.length === 1 || result === "") {
            result = "";
            output.html(0);
          } else {
            result = result.substring(0, result.length - 1);
            output.html(result);
          }
          break;
        case "=":
          if (result === "") {
            result = "";
            output.html(0);
          } else {
            try {
              result = String(
                eval(result.replaceAll("x", "*").replaceAll("÷", "/"))
              );
              output.html(result);
            } catch (error) {
              output.html("Invalid");
              result = "";
            }
          }
          break;
        default:
          result += event.target.textContent;
          output.html(result);
          break;
      }
    }
  });
});