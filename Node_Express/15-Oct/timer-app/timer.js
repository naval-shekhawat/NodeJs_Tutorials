function showDateDiff(){
    let selectedTimeElement = document.getElementById("dateTime");
    setInterval(calculateDifference, 1000, selectedTimeElement)
}

function calculateDifference (selectedTimeElement) {
    let now = new Date();
    let future = new Date(selectedTimeElement.value);
    let diff = future.getTime() - now.getTime();
    let differenceInDays  = Math.floor(diff / (1000 * 24 * 60 * 60));
    let differenceInHours  = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
    let differenceInMinutes = Math.floor(
    (diff % (1000 * 60 * 60)) / (1000 * 60 )
    )

    let differenceInSeconds = Math.floor(
        (diff % (1000 * 60)) / (1000)
        )


    document.getElementById("day").innerHTML = differenceInDays
    document.getElementById("hours").innerHTML = differenceInHours
    document.getElementById("minutes").innerHTML = differenceInMinutes
    document.getElementById("seconds").innerHTML = differenceInSeconds
}

setInterval(showDateDiff, 1000)