let leftNum = 0;
    let rightNum = 0;
    let score = 0;

    
    function rand1to10() {
      return Math.floor(Math.random() * 10) + 1; // 1–10
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

    // --- Krav: reset-knapp genererer to tall (1–10) ---
    function resetNums() {
      leftNum = rand1to10();
      rightNum = rand1to10();
      visTall();
      document.getElementById("opInput").value = "";
      setFeedback(""); // tøm melding
      // (valgfritt) fokuser input for rask skriving
      document.getElementById("opInput").focus();
    }

    // --- Krav: submit sjekker operator og oppdaterer poeng ---
    function submitAnswer() {
      const input = document.getElementById("opInput").value.trim();

      // Valider tegn
      if (input !== ">" && input !== "<" && input !== "=") {
        setFeedback('Skriv kun ">", "<" eller "=".', false);
        return;
      }

      // Finn korrekt operator
      let correctOp;
      if (leftNum > rightNum) {
        correctOp = ">";
      } else if (leftNum < rightNum) {
        correctOp = "<";
      } else {
        correctOp = "=";
      }

      // Sjekk svar + oppdater poeng
      if (input === correctOp) {
        score += 1;
        setFeedback("Riktig! 🎉", true);
      } else {
        score -= 1;
        setFeedback(`Feil. Riktig er "${correctOp}".`, false);
      }
      visScore();
    }

    // Starttilstand (vis placeholders)
    visTall();
    visScore();