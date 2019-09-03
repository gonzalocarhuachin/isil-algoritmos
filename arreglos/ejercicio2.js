let fastfoods = [
    {nombre:"McDonalds", x: 12, y:300},
    {nombre:"Popeyes", x: 500, y:231},
    {nombre:"Bembos", x: 100, y:520},
    {nombre:"Burger King", x: 320, y:20},
    {nombre:"Pizza Hut", x: 105, y:56},
    {nombre:"China Wok", x: 230, y:420},
    {nombre:"Taco Bell", x: 480, y:100},
]

function getMinDistanceIndex(fastfoods) {
    let min = distance(100, 100, fastfoods[0].x, fastfoods[0].y)
    let minIndex = 0

    for (let i = 0; i < fastfoods.length; i++) {
        if(distance(100, 100, fastfoods[i].x, fastfoods[i].y) < min){
            min = distance(100, 100, fastfoods[i].x, fastfoods[i].y)
            minIndex = i
        }
    }
    return minIndex
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
}