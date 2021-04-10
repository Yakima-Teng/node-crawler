const cheerio = require("cheerio");
const superagent = require("superagent");

const targetDomain = 'https://gitee.com'
const targetUrl = `${targetDomain}/explore`

function getRecommendedProjectsInGiteeExplore () {
    return new Promise((resolve, reject) => {
        superagent
            .get(targetUrl)
            .set('Host', 'gitee.com')
            .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9')
            .set('Referer', 'https://gitee.com/organizations/bulls-cows/projects')
            .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36')
            .end((err, res) => {
                if (err) {
                    reject(err)
                    return
                }
                const $ = cheerio.load(res.text);
                const list = []
                $(".explore-repo__list > .item").each((index, element) => {
                    const $this = $(element)
                    const title = $this.find('.project-title .title').text().trim()
                    const href = `${targetDomain}${$this.find('.project-title .title').prop('href').trim()}`
                    const metas = (() => {
                        const labels = []
                        $this.find('.project-title .project-meta .label').each((idx, elem) => {
                            labels.push($(elem).text().trim())
                        })
                        return labels
                    })()
                    const desc = $this.find('.project-desc').text().trim()
                    const updated = $this.find('.project-latest .text-muted:nth-of-type(1)').text().trim()
                    const returnObj = { title, href, metas, desc, updated }
                    list.push(returnObj)
                })
                const time = new Date().toLocaleString()
                resolve({ time, list })
            });
    });
}

module.exports = {
    getRecommendedProjectsInGiteeExplore,
}
