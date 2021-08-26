const adaletcanseks = require('discord.js');
const dbb = require("../schemas/market")
const pdb = require("../schemas/para")

module.exports = {
    conf: {
      aliases: [],
      name: "para",
      help: "para [ver/ekle/sil]",
    },
    run: async (client, message, args, embed, kinoshi, prefix) => {
        if(!args[0]) {
            pdb.findOne({guild: message.guild.id, user: message.author.id}, (err, para) =>{
              if(!para) return message.channel.send(`<:tik_kinoshi:876867730744176692> Şuan ki paran 0`)
                message.channel.send(`<:tik_kinoshi:876867730744176692> Şuan ki paran ${para.para}`)
            })

        } else if(args[0] === "ekle") {
            if(!message.member.roles.cache.has("877267781626789918") && !message.member.roles.cache.has("850663741057007636") && !message.member.roles.cache.has("850663743817383976") && !message.member.roles.cache.has("854096979138445332") && !message.member.hasPermission(8)) return await message.react("<:x_kinoshi:876867730639323187>")
            var user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
            if(!user) return message.channel.send(embed.setDescription(`<:x_kinoshi:876867730639323187> Bir kullanıcı etiketle!`))
pdb.findOne({guild: message.guild.id, user: user.id}, (err, para) =>{
  let a = parseInt(args[2]);
  if(!a) return message.channel.send("<:x_kinoshi:876867730639323187> eklemek istediğin para miktarını gir ve tekrardan dene.")
  if(para) {
      message.channel.send("<:tik_kinoshi:876867730744176692> "+a+" adet para **"+user.user.tag+"** üyesinin cüzdanına başarıyla eklendi.")
    para.para = para.para + a
    para.save().catch(err => console.log(err))
  } 
  if(!para) {
    message.channel.send("<:tik_kinoshi:876867730744176692> "+a+" adet para **"+user.user.tag+"** üyesinin cüzdanına başarıyla eklendi.")
   const newData = pdb({
    guild: message.guild.id,
    user: user.id, 
    para: a
   })
   newData.save().catch(err => console.log(err))
  }
})
        } else if(args[0] === "sil") {
          if(!message.member.roles.cache.has("877267781626789918") && !message.member.roles.cache.has("850663741057007636") && !message.member.roles.cache.has("850663743817383976") && !message.member.roles.cache.has("854096979138445332") && !message.member.hasPermission(8)) return await message.react("<:x_kinoshi:876867730639323187>")
          var user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
            if(!user) return message.channel.send(embed.setDescription(`<:x_kinoshi:876867730639323187> Bir kullanıcı etiketle!`))
            pdb.findOne({guild: message.guild.id, user: user.id}, (err, para) =>{
              let a = parseInt(args[2]);
              if(!a) return message.react("<:x_kinoshi:876867730639323187>")
              if(para.para <= 0) return message.channel.send("<:x_kinoshi:876867730639323187> üyenin parası olmadığı için para silemedim!")
              if(para) {
                  message.channel.send("<:tik_kinoshi:876867730744176692> "+a+" adet para **"+user.user.tag+"** üyesinin cüzdanından silindi.")
                para.para = para.para - a
                para.save().catch(err => console.log(err))
              } 
              if(!para) {
                message.channel.send("<:x_kinoshi:876867730639323187> üyenin parası olmadığı için para silemedim!")
              }
            })
        } else if(args[0] === "ver") {
          if(args[1] !== "rol") {
            var user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
            if(!user) return message.channel.send(embed.setDescription(`<:x_kinoshi:876867730639323187> Bir kullanıcı etiketle!`))
            if(user.id === message.author.id) return message.react("<:x_kinoshi:876867730639323187>")
            pdb.findOne({guild: message.guild.id, user: user.id}, (err, para) =>{
              let a = parseInt(args[2]);
              if(!a) return message.react("<:x_kinoshi:876867730639323187>")
              if(para) {
                  message.channel.send("<:tik_kinoshi:876867730744176692> "+a+" adet para **"+user.user.tag+"** üyesine verildi!")
                para.para = para.para + a
                para.save().catch(err => console.log(err))
              } else if(!para) {
                message.channel.send("<:tik_kinoshi:876867730744176692> "+a+" adet para **"+user.user.tag+"** üyesine verildi!")
                const newData = pdb({
                  guild: message.guild.id,
                  user: user.id, 
                  para: a
                 })
                 newData.save().catch(err => console.log(err))
              }
            })
  
            pdb.findOne({guild: message.guild.id, user: message.author.id}, (err, para) => {
              let a = parseInt(args[2]);
              if(para) {
                para.para = para.para - a
                para.save().catch(err => console.log(err))
              } else if(!para) {
                const newData = pdb({
                  guild: message.guild.id,
                  user: user.id, 
                  para: 0
                 })
                 newData.save().catch(err => console.log(err))
              }
            })
          } else if(args[1] === "rol") {
              if(!message.member.roles.cache.has("877267781626789918") && !message.member.roles.cache.has("850663741057007636") && !message.member.roles.cache.has("850663743817383976") && !message.member.roles.cache.has("854096979138445332") && !message.member.hasPermission(8)) return await message.react("<:x_kinoshi:876867730639323187>")
            let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            let rol = await message.guild.members.cache.filter(x => x.roles.cache.has(role.id))
            if(!rol) return message.channel.send("<:x_kinoshi:876867730639323187> Bir rol id gir")
            let a = parseInt(args[3]);
            if(!a) return message.channel.send("<:x_kinoshi:876867730639323187> eklemek istediğin para miktarını gir ve tekrardan dene.")
            message.channel.send("<:tik_kinoshi:876867730744176692> **"+rol.size+"** Adet kişiye **"+a+"** kadar para verildi.")
            rol.forEach(x => {
            pdb.findOne({guild: message.guild.id, user: x.id}, (err, para) =>{
             if(para) {
               para.para = para.para + a
               para.save().catch(err => console.log(err))
             } 
             if(!para) {
              const newData = pdb({
               guild: message.guild.id,
               user: x.id, 
               para: a
              })
              newData.save().catch(err => console.log(err))
             }
            })
          })
          }
        } else if(args[0]) {
          var user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
          if(!user) return message.channel.send(embed.setDescription(`<:x_kinoshi:876867730639323187> Bir kullanıcı etiketle!`))
          if(!client.users.cache.get(user.id)) return message.react("<:x_kinoshi:876867730639323187>")
          pdb.findOne({guild: message.guild.id, user: user.id}, (err, para) =>{
           if(!para) return  message.channel.send(`<:tik_kinoshi:876867730744176692> **${user.user.tag}** Kullanıcısının cebinde **0** kadar para var.`)
              message.channel.send(`<:tik_kinoshi:876867730744176692> **${user.user.tag}** Kullanıcısının cebinde **${para.para}** kadar para var.`)
          })
        }

        
    }
  }
