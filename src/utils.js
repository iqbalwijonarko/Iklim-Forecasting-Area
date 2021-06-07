export function utils(data) {
    var list = data["list"]
    var tmp1 = 0
    var tmp2 = 0
    var tmp3 = 0
    var tmp4 = 0
    var tmp5 = 0

    var difTmp1 = 0
    var difTmp2 = 0
    var difTmp3 = 0
    var difTmp4 = 0
    var difTmp5 = 0

    var tmpMax = []
    var tmpMin = []
    var result = []

    //weather day 1
    var i;
    var tmpNum
    for (i = 0; i < 8; i++) {
        tmpNum = list[i]["main"]["temp"]
        var tmpDifNum =  - list[i]["main"]["temp_min"]
        tmpMax.push(list[i]["main"]["temp_max"])
        tmpMin.push(list[i]["main"]["temp_min"])
        difTmp1 =  difTmp1 + tmpDifNum
        tmp1 = tmp1 + tmpNum
    }
    var date1 = list[0]["dt_txt"].substring(0, 10);
    var tmp1fix = (tmp1/8).toFixed(0)
    var tmp1DifNumFix = (Math.max(...tmpMax) - Math.min(...tmpMin)).toFixed(2)
    result.push({"day": date1, "tmp": tmp1fix, "difTmp" : tmp1DifNumFix})
    tmpMax = []
    tmpMin = []
    
    //weather day 1
    for (i = 8; i < 16; i++) {
        tmpNum = list[i]["main"]["temp"]
        tmpMax.push(list[i]["main"]["temp_max"])
        tmpMin.push(list[i]["main"]["temp_min"])
        difTmp2 =  difTmp2 + tmpDifNum
        tmp2 = tmp2 + tmpNum
    }
    var date2 = list[8]["dt_txt"].substring(0, 10);
    var tmp2fix = (tmp2/8).toFixed(0)
    var tmp2DifNumFix = (Math.max(...tmpMax) - Math.min(...tmpMin)).toFixed(2)
    result.push({"day": date2, "tmp": tmp2fix, "difTmp" : tmp2DifNumFix})
    tmpMax = []
    tmpMin = []
    
    //weather day 3
    for (i = 16; i < 24; i++) {
        tmpNum = list[i]["main"]["temp"]
        tmpMax.push(list[i]["main"]["temp_max"])
        tmpMin.push(list[i]["main"]["temp_min"])
        difTmp3 =  difTmp3 + tmpDifNum
        tmp3 = tmp3 + tmpNum
    }
    var date3 = list[16]["dt_txt"].substring(0, 10);
    var tmp3fix = (tmp3/8).toFixed(0)
    var tmp3DifNumFix = (Math.max(...tmpMax) - Math.min(...tmpMin)).toFixed(2)
    result.push({"day": date3, "tmp": tmp3fix, "difTmp" : tmp3DifNumFix})
    tmpMax = []
    tmpMin = []
    
    //weather day 4
    for (i = 24; i < 32; i++) {
        tmpNum = list[i]["main"]["temp"]
        tmpMax.push(list[i]["main"]["temp_max"])
        tmpMin.push(list[i]["main"]["temp_min"])
        difTmp4 =  difTmp4 + tmpDifNum
        tmp4 = tmp4 + tmpNum
    }
    var date4 = list[24]["dt_txt"].substring(0, 10);
    var tmp4fix = (tmp4/8).toFixed(0)
    var tmp4DifNumFix = (Math.max(...tmpMax) - Math.min(...tmpMin)).toFixed(2)
    result.push({"day": date4, "tmp": tmp4fix, "difTmp" : tmp4DifNumFix})
    tmpMax = []
    tmpMin = []
    
    //weather day 5
    for (i = 32; i < 40; i++) {
        tmpNum = list[i]["main"]["temp"]
        tmpMax.push(list[i]["main"]["temp_max"])
        tmpMin.push(list[i]["main"]["temp_min"])
        difTmp5 =  difTmp5 + tmpDifNum
        tmp5 = tmp5 + tmpNum
    }
    var date5 = list[32]["dt_txt"].substring(0, 10);
    var tmp5fix = (tmp5/8).toFixed(0)
    var tmp5DifNumFix = (Math.max(...tmpMax) - Math.min(...tmpMin)).toFixed(2)
    result.push({"day": date5, "tmp": tmp5fix, "difTmp" : tmp5DifNumFix})

    console.log(result)
    return result
}