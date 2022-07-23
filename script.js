 const timeContainer = document.getElementById("time-container");
    const START_PROGRAMMING = "01-01-2018";
    const START_PROGRAMMING_DATE = new Date(START_PROGRAMMING);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - START_PROGRAMMING_DATE.getTime()) / 1000
      );

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);