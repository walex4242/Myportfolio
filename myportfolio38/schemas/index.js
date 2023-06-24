import pageInfo from './pageinfo'
import experience from './experience'
import skill from './skill'
import social from './social'
import project from './project'

import  schemaTypes  from 'all:part:@sanity/base/schema-type'
import { createSchema } from 'part:@sanity/base/schema-creator'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        pageInfo, 
        experience, 
        skill, social, 
        project
    ])
})
