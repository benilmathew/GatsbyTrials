/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
const path = require(`path`)
const data = require('./templateBuilder.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve('./src/templates/page.js')

  data.forEach(page_object =>{
      var path = page_object.blogName;

      createPage({
          path, 
          component: template,
          context: page_object
      })
  })
}