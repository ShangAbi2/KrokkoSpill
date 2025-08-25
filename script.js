let leftNum = 0;
let rightNum = 0;
let score = 0;

    
    function rand1to10() {
      return Math.floor(Math.random() * 10) + 1;
    }

    function visTall() {
      document.getElementById("leftNum").textContent = leftNum;
      document.getElementById("rightNum").textContent = rightNum;
    }

    function visScore() {
      document.getElementById("score").textContent = score;
    }

    function setFeedback(msg, ok = null) {
      const el = document.getElementById("feedback");
      el.textContent = msg;
      el.className = ok === true ? "ok" : ok === false ? "err" : "";
    }

    
    function resetNums() {
      leftNum = rand1to10();
      rightNum = rand1to10();
      visTall();
      document.getElementById("opInput").value = "";
      setFeedback(""); 
      document.getElementById("opInput").focus();
    }

 
    function submitAnswer() {
      const input = document.getElementById("opInput").value.trim();

      if (input !== ">" && input !== "<" && input !== "=") {
        setFeedback('Skriv kun ">", "<" eller "=".', false);
        return;
      }

      
      let correctOp;
      if (leftNum > rightNum) {
        correctOp = ">";
      } else if (leftNum < rightNum) {
        correctOp = "<";
      } else {
        correctOp = "=";
      }

      
      if (input === correctOp) {
        score += 1;
        setFeedback("Riktig! 🎉", true);
      } else {
        score -= 1;
        setFeedback(`Feil. Riktig er "${correctOp}".`, false);
      }
      visScore();
    }

    
    visTall();
    visScore();