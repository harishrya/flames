
    function subash() 
    {
      let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, '');
      let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, '');
      const result = document.getElementById("result");

      if (name1 === "" || name2 === "")
         {
        result.textContent = "Please enter both names!";
        return;
      }

      for (let i = 0; i < name1.length; i++)
         {
        let char = name1[i];
        if (name2.includes(char)) {
          name1 = name1.replace(char, '');
          name2 = name2.replace(char, '');
          i--;
        }
      }

      let count = name1.length + name2.length;
      let flames = ["F", "L", "A", "M", "E", "S"];

      let index = 0;
      while (flames.length > 1) 
        {
        index = (count % flames.length) - 1;
        if (index >= 0) 
            {
          flames.splice(index, 1);
        } 
        else 
            {
          flames.pop();
        }
      }

      let meaning = {
        "F": "💛 Friends",
        "L": "❤️ Love",
        "A": "😊 Affection",
        "M": "💍 Marriage",
        "E": "😈 Enemies",
        "S": "👩‍👦 Siblings"
      };

      result.innerHTML = `Result: <span style="color:#ff0055">${meaning[flames[0]]}</span>`;
    }