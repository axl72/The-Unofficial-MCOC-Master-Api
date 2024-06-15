import bcrypt from 'bcrypt'

export const encrypt = (string:string) => {
    bcrypt.hash(string, 10, (err, result) => {
        if(err) return

        return result

    })
}