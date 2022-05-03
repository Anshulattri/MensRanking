# post=localhost3000/MensRanking
body= 
body
{
 
    "ranking": 7,
    "name": "anshul attri",
    "dob": "1998-03-05T18:30:00.000Z",
    "country": "india",
    "score": 147,
    "event": "100m",
    "__v": 0
}
# 
# 
# find =get=localhost3000/MensRankings
body
{
 {"_id":{"$oid":"6270d6aacdb9d1c732140bd1"},"ranking":1,"name":"anshul","dob":{"$date":"1999-03-05T18:30:00.000Z"},"country":"india","score":14777,"event":"100m","__v":0}
#get=localhost3000/MensRanking/id
body
{
 
    "ranking": 7,
    "name": "anshul attri",
    "dob": "1998-03-05T18:30:00.000Z",
    "country": "india",
    "score": 147,
    "event": "100m",
    "__v": 0
}
# findByIdAndUpdate = patch=localhost3000/MensRanking/id
body
{
 
    "ranking": 7,
    "name": "anshul ",
    "dob": "1998-03-05T18:30:00.000Z",
    "country": "india",
    "score": 147,
    "event": "100m",
    "__v": 0
}
# findByIdAndDelete= delete=localhost3000/MensRanking/id"
delete
