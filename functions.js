function createRebuttalPanel() {
    let rebuttalPanel = document.createElement("div");
    rebuttalPanel.style.border = "1px solid black";
    rebuttalPanel.style.position = "sticky";
    rebuttalPanel.style.top = "0%";
    rebuttalPanel.style.height = "fit-content";
    rebuttalPanel.style.width = "100%";

    const rebuttalInnerHtml = 
        `<h2 style="color: red;">Rebuttals</h2>
        <h3>
            This is the overall rebuttal to all no’s it gives you time to think of an answer
            <br>Feel felt and found 
        </h3>
        <p>
            I understand how you feel, other people felt the same way but what they found is <strong>(insert your answer here)</strong>
        </p>
        <h3>If they don't have solar</h3>
        <ul>
            <li>Interest is fueled by performance – if you had solar for the last few years and were offsetting the increase in Energy rates year after year, you would have been putting extra money in your pockets and paying off other things than giving to the utility company</li>
            <li>More people are going solar today than every before in fact in California you cannot build a house without having solar on your roof as of this year!  It is not legal.  The demand is so high because it just makes sense.</li>
            <li>Right now the government is offering the 30% tax rebate, there is a chance that this could  go away, that is why you owe it to yourself to go solar now before its too late!!!</li>
        </ul>
        <h3>If they have solar and are not happy with it</h3>
        <ul>
            <li>Solar is just math- either your using more electricity than your panels are producing or your using a lot of electricity at night without a battery back up – you owe it to yourself to have us do an analysis</li>
            <li>A lot of families grow overtime or just life schedules change would change your schedule and your energy usage , let us come out and see if your system is set up right for your lifestyle</li>
            <li>You have a solar system and obviously you spent a lot of money for it – let us see if it is performing at optimal level or if adding a battery or panels will really increase your cost savings – you owe it to yourself to have us come out</li>
        </ul>`;

    rebuttalPanel.innerHTML = rebuttalInnerHtml;
    

    return rebuttalPanel;
} 

function putPanel(id, panel) {
    document.getElementById("right-panel").appendChild(panel);
}