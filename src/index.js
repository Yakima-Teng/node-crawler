const nodeSchedule = require("node-schedule");
const { getRecommendedProjectsInGiteeExplore } = require('./jobs/gitexplore')

// 每10秒执行一次任务
nodeSchedule.scheduleJob('*/10 * * * * *', async function () {
    try {
        const { time, list } = await getRecommendedProjectsInGiteeExplore();

        console.log(`爬取时间：${time}`)
        console.log(JSON.stringify(list, null, 2))

        /**
         * 需要存数据库的话，可以放开下面的注释，稍加修改
         */
        // const { sql } = require('./services/sql')
        // const logs = []
        // logs.push('')
        // logs.push(`执行开始时间：${new Date().toLocaleString()}`)
        // logs.push(`爬取结果: ${JSON.stringify({ time, name })}`)
        // sql({
        //     query: 'UPDATE example_table_name SET name = ?, time = ? WHERE id = ?',
        //     params: [name, Math.round(time / 1000), 1],
        // })
        //     .then((result) => {
        //         logs.push(`sql结果：${result.message.replace(/^\(/, '')}`)
        //     })
        //     .catch((error) => {
        //         throw error
        //     })
        //     .then(() => {
        //         logs.forEach(log => console.log(log))
        //     })
    } catch (error) {
        console.error(error);
    }
});
