import knex from 'knex'

export const db = knex({
    client: 'sqlite',
    connection: {
        filename: './data/iit.sqlite',
    }
})
