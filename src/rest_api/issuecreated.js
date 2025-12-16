
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
    auth: "your key"
});

async function createIssue () {
    try {
        await octokit.request('POST /repos/StaytunedLAB/yadav-sahil-2304030102017/issues', {
            owner: 'StaytunedLAB',
            repo: 'utkarsh-prajapati-2304030101336',
            title: 'issue created using javascript code',
            body: "issue created using javascript code using rest api key token.",
            labels: ['Task'],
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        console.log("issue created");
    } catch (error) {
        console.error("Error creating issue:", error);
    }
}
createIssue();