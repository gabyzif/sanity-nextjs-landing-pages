export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6099daa8608fd91302c5b381',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a2uh1vy5',
                  apiId: '8af08024-8f50-46b0-8492-17c6002235b4'
                },
                {
                  buildHookId: '6099daa85493b617bee0eb4a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gfqmtmit',
                  apiId: 'f6dc2d57-dc42-4071-9e87-3ccfef324561'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabyzif/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gfqmtmit.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
