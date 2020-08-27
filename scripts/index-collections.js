const fs = require('fs');
const fm = require('front-matter');

const path = './build/assets/collections/';

function readdir(dir) {
    fs.readdir(`${path}${dir}`, (err, files) => {
        if (err) {
            throw err;
        }

        let index = [];

        files.forEach(file => {
            const stats = fs.lstatSync(`${path}${dir}/${file}`);
                
            if(stats.isDirectory() && file !== 'site') {
                readdir(`${dir}${file}`);
            } else if (stats.isFile() && file !== 'index.md') {
                const data = fs.readFileSync(`${path}${dir}/${file}`, 'utf-8');

                const md = fm(data);
                if (md.attributes.published) {
                    // console.log(md.attributes);
                    index.push({
                        title: md.attributes.title,
                        url: `/${dir}/${file.substring(0, file.indexOf('.md'))}`,
                        text: md.body.substring(0, md.body.indexOf('<!--more-->')),
                        date: md.attributes.date
                    });
                }
            }
        });

        index.sort((doc1, doc2) => {
            return new Date(doc2.date) - new Date(doc1.date);
        });

        if(index.length > 0) {
            let newIndex = [];
            const data = fs.readFileSync(`${path}${dir}/index.md`, 'utf-8');
            const md = fm(data);

            newIndex.push(`---\n${md.frontmatter}`);

            index.forEach(doc => {
                newIndex.push(`---\n\n# [${doc.title}](${doc.url})\n\n${doc.text}[Read More](${doc.url})\n`);
            });

            fs.writeFileSync(`${path}${dir}/index.md`, newIndex.join('\n'), 'utf-8')
        }
    });
}

readdir('');