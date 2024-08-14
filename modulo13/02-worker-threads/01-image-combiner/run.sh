
IMAGE_URL="https://cdn.awsli.com.br/800x800/2657/2657807/produto/255897542/1708370824944-removebg-preview-1d3081427f.png"
BACKGROUND_URL="https://images.unsplash.com/photo-1629012442785-7b61081374f5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBvY2FseXBzZXxlbnwwfHwwfHx8MA%3D%3D"
URL="http://localhost:3000/joinImages?img=$IMAGE_URL&background=$BACKGROUND_URL"
echo $URL
node node_modules/autocannon/autocannon.js --renderStatusCodes -c500 $URL
# curl $URL 