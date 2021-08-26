const adaletcanseks = require('discord.js');
const db = require("../schemas/market")
const idb = require("../schemas/çanta")
const pdb = require("../schemas/para")

module.exports = {
    conf: {
      aliases: [],
      name: "eşya",
      help: "eşya [al/sat/kullan/ver || ekle/kaldır]",
    },
    run: async (client, message, args, embed, kinoshi, prefix) => {
      if(message.member.hasPermission(8) || message.author.id === "671099941149474837" || message.author.id === "424613800843673601" || message.member.roles.cache.has("877267781626789918") || message.member.roles.cache.has("850663741057007636") || message.member.roles.cache.has("850663743817383976") || message.member.roles.cache.has("854096979138445332")) {
        if(args[0] === "al" && args[0] === "sat" && args[0] === "kullan") return
          if(args[0] === "ekle") {
          if(!args[1]) { message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> İşlemi düzgün doldur. \`eşya ekle [isim fiyat açıklama]\``)) } else {
          if(!args[2]) { message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> İşlemi düzgün doldur. \`eşya ekle [isim fiyat açıklama]\``)) } else {
          if(!args[3]) { message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> İşlemi düzgün doldur. \`eşya ekle [isim fiyat açıklama]\``)) } else {
          var eşya = await db.findOne({guild: message.guild.id})
          if(!eşya) { new db({ guild: message.guild.id, name: args[1], price: args[2], desc: args.slice(3).join(" ") }).save() } else if(eşya) { new db({ guild: message.guild.id, name: args[1], price: args[2], desc: args.slice(3).join(" ") }).save() }
          message.channel.send(embed.setColor("#ff0000").setDescription(`<:tik_kinoshi:876867730744176692> Başarıyla markete \`${args[1]}\` isimli ürün eklendi!`))
          }
          }
          }
          } else if(args[0] === "kaldır") {
            if(!args[1]) { message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> İşlemi düzgün doldur. \`eşya kaldır [isim]\``)) } else {
                var eşya = await db.findOne({guild: message.guild.id})
                await db.findOneAndDelete({ guild: message.guild.id, name: args[1] });
                message.channel.send(embed.setColor("#ff0000").setDescription(`<:tik_kinoshi:876867730744176692> Bu eşya başarılı şekilde marketten kaldırıldı.`))
          }
          }
        }
        if(args[0] === "ekle" && args[0] === "kaldır") return
        if(!args[0]) { message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> Lütfen bir işlem seç. \`eşya [al/sat/kullan/ver || ekle/kaldır]\``)) } else if(args[0] === "sat") {
          if(!args[1]) { message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> İşlemi düzgün doldur. \`eşya sat [isim]\``)) } else if(args[1]) {
            let para = await pdb.findOne({guild: message.guild.id, user: message.author.id})
            var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
            if(!çanta) return message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> Bu eşyaya sahip değilsin!`))
            var eşya = await db.findOne({guild: message.guild.id, name: args[1]})
            message.channel.send(embed.setDescription(`<:tik_kinoshi:876867730744176692> **${eşya.name}** bu eşya satıldı, **${eşya.price}** kadar para da cebine eklendi`))
           
           var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
		   pdb.findOne({guild: message.guild.id, user: message.author.id}, (err, para) =>{
            if(para) {
              para.para = para.para + Number(çanta.price)
              para.save().catch(err => console.log(err))
            } else if(!para) {
             const newData = pdb({
              guild: message.guild.id,
              user: user.id, 
              para: çanta.price
             })
             newData.save().catch(err => console.log(err))
            }
          })
            await idb.findOneAndDelete({ guild: message.guild.id, user: message.author.id, name: args[1] });    
}
          } else if(args[0] === "al") {
        if(!args[1]) { message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> İşlemi düzgün doldur. \`eşya al [isim tane]\``)) } else {
        var eşya = await db.findOne({guild: message.guild.id, name: args[1]})
        if(!eşya) { message.react("<:x_kinoshi:876867730639323187>") } else {
        var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id})
        let para = await pdb.findOne({guild: message.guild.id, user: message.author.id})
        
        if(!para) return message.channel.send(`<:x_kinoshi:876867730639323187> H-hey dostum p-paran yok..`)
        if(para.para < eşya.price) return message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> Alıcağın ürüne paran yetmiyor! ürün: \`${eşya.price}\`, paran: \`${para.para}\``))
        let ü = Number(args[2]) * eşya.price 
        if(ü >= para.para) return message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> \`${Number(args[2])}\` adet almak istiyorsan \`${ü}\` kadar paran olması gerek.`))
        var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
        var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id})

        var eşya = await db.findOne({guild: message.guild.id, name: args[1]})
        var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
        if(çanta) {
          if(!Number(args[2])) {
            var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
            await pdb.findOne({guild: message.guild.id, user: message.author.id}, async(err, para) =>{
              if(para) {
                para.para = para.para - Number(eşya.price)
                para.save().catch(err => console.log(err))
              } else if(!para) {
               const newDataa = pdb({
                guild: message.guild.id,
                user: user.id, 
                para: 0
               })
               newDataa.save().catch(err => console.log(err))
              }
            })
            await idb.findOneAndUpdate({ guild: message.guild.id, user: message.author.id, name: args[1] },  { tane: çanta.tane = çanta.tane + 1, price: çanta.price ? çanta.price = çanta.price + Number(eşya.price) : 0  });
           
            
          } else if(Number(args[2])) {
            var eşya = await db.findOne({guild: message.guild.id, name: args[1]})
            var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]}) 
            idb.findOneAndUpdate({ guild: message.guild.id, user: message.author.id, name: args[1] },  { tane: çanta.tane = çanta.tane + Number(args[2]), price: çanta.price ? çanta.price = çanta.price + Number(eşya.price) : 0 });
            await pdb.findOne({guild: message.guild.id, user: message.author.id}, async(err, para) => {
              if(para) {
                para.para = para.para - Number(eşya.price) * Number(args[2])
                para.save().catch(err => console.log(err))
              } else if(!para) {
               const newDataaa = pdb({
                guild: message.guild.id,
                user: user.id, 
                para: 0
               })
               newDataaa.save().catch(err => console.log(err))
              }
            }) 
            
          }
        }

        var eşya = await db.findOne({guild: message.guild.id, name: args[1]})
        var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
        if(!çanta) {
          if(!Number(args[2])) {
            var eşya = await db.findOne({guild: message.guild.id, name: args[1]})
            await pdb.findOne({guild: message.guild.id, user: message.author.id}, async(err, para) => {
              if(para) {
                para.para = para.para - Number(eşya.price)
                para.save().catch(err => console.log(err))
              } else if(!para) {
               const newDat = pdb({
                guild: message.guild.id,
                user: user.id, 
                para: 0
               })
               newDat.save().catch(err => console.log(err))
              }
            }) 
            await new idb({ guild: message.guild.id, user: message.author.id, name: eşya.name, tane: 1, desc: eşya.desc, price: eşya.price }).save() 
 
          } else if(Number(args[2])) {
              var eşya = await db.findOne({guild: message.guild.id, name: args[1]})
              await new idb({ guild: message.guild.id, user: message.author.id, name: eşya.name, tane: Number(args[2]), desc: eşya.desc, price: eşya.price }).save() 
              await pdb.findOne({guild: message.guild.id, user: message.author.id}, async(err, para) =>{
                if(para) {
                  para.para = para.para - Number(eşya.price) * Number(args[2])
                  para.save().catch(err => console.log(err))
                } 
                if(!para) {
                 const newDataaaa = pdb({
                  guild: message.guild.id,
                  user: user.id, 
                  para: 0
                 })
                 newDataaaa.save().catch(err => console.log(err))
                }
              })
            }
        }
        
        message.channel.send(embed.setAuthor(`${message.author.tag}`, message.guild.iconURL({dynamic: true})).setDescription(`<:tik_kinoshi:876867730744176692> Başarılı şekilde **${eşya.name}** isimli ürünü aldın!`))
        }
        }
        } else if(args[0] === "kullan") {
          if(!args[1]) { message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> İşlemi düzgün doldur. \`eşya kullan [isim]\``)) } else if(args[1]) {
            var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
	    if(!çanta) return message.react("<:x_kinoshi:876867730639323187>")
            if(çanta.tane <= 1) {
             var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
             var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
             var eşya = await db.findOne({guild: message.guild.id, name: args[1]})
	     if(!eşya) return message.react("<:x_kinoshi:876867730639323187>")
             var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
             message.channel.send(`<:tik_kinoshi:876867730744176692>`)
		  console.log("c")
             var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id})
             var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
             await idb.findOneAndDelete({ guild: message.guild.id, user: message.author.id, name: args[1] });
           }
            if(Number(args[2])) {
		  if(!Number(args[2])) return
            let para = await pdb.findOne({guild: message.guild.id, user: message.author.id})
            var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
            var eşya = await db.findOne({guild: message.guild.id, name: args[1]})
            message.channel.send(`<:tik_kinoshi:876867730744176692>`)
		    console.log("b")
            var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id})
            var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
           
	      await idb.findOneAndUpdate({ guild: message.guild.id, user: message.author.id, name: args[1] }, { tane: çanta.tane = çanta.tane - Number(args[2])  });
          } else if(!Number(args[2])) {
		  if(Number(args[2])) return
              let para = await pdb.findOne({guild: message.guild.id, user: message.author.id})
              var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
		  if(çanta.tane <= 1) return
              var eşya = await db.findOne({guild: message.guild.id, name: args[1]})
              message.channel.send(`<:tik_kinoshi:876867730744176692>`)
		  console.log("a")
              var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id})
              var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[1]})
	      await idb.findOneAndUpdate({ guild: message.guild.id, user: message.author.id, name: args[1] }, { tane: çanta.tane = çanta.tane - 1  });
        } 
      }
    } else if(args[0] === "ver") {
      if(!args[1]) { message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> İşlemi düzgün doldur. \`eşya ver @kinoshi [eşya tane]\``)) } else { 
      if(!args[2]) { message.channel.send(embed.setColor("#ff0000").setDescription(`<:x_kinoshi:876867730639323187> İşlemi düzgün doldur. \`eşya ver @kinoshi [eşya tane]\``)) } else { 
        var user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
        if(user.id === message.author.id) return message.react("<:x_kinoshi:876867730639323187>")
        if(Number(args[3])) {
          var user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
          var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[2]})
          if(!çanta) return message.react("<:x_kinoshi:876867730639323187>")
          message.channel.send(embed.setDescription(`<:tik_kinoshi:876867730744176692> **${args[2]}** İsimli eşya **${user.user.tag}** üyesine verildi!`))
          await idb.findOneAndDelete({ guild: message.guild.id, user: message.author.id, tane: çanta.tane = çanta.tane - Number(args[3]) });
        } else if(!Number(args[3])) {
          var user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
          var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[2]})
          if(!çanta) return message.react("<:x_kinoshi:876867730639323187>")
          message.channel.send(embed.setDescription(`<:tik_kinoshi:876867730744176692> **${args[2]}** İsimli eşya **${user.user.tag}** üyesine verildi!`))
          await idb.findOneAndDelete({ guild: message.guild.id, user: message.author.id, tane: çanta.tane = çanta.tane - 1 });
        }
        var user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
        var çanta = await idb.findOne({guild: message.guild.id, user: user.id, name: args[2]})
        if(!çanta) {
          if(!Number(args[3])) {
        var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[2]})
          await new idb({ guild: message.guild.id, user: user.id, name: çanta.name, tane: Number(1), desc: çanta.desc, price: çanta.price }).save() 
          } else if(Number(args[3])) {
            var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[2]})
            await new idb({ guild: message.guild.id, user: user.id, name: çanta.name, tane: Number(args[3]), desc: çanta.desc, price: çanta.price }).save() 
          }
        }
        var çanta = await idb.findOne({guild: message.guild.id, user: user.id, name: args[2]})
        if(çanta) {
          if(!Number(args[3])) {
            var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[2]})
            await idb.findOneAndUpdate({ guild: message.guild.id, user: user.id, name: çanta.name }, { tane: çanta.tane = çanta.tane + Number(1), desc: çanta.desc, price: çanta.price })
              } else if(Number(args[3])) {
                var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[2]})
                await idb.findOneAndUpdate({ guild: message.guild.id, user: user.id, name: çanta.name }, { tane: çanta.tane = çanta.tane + Number(args[3]), desc: çanta.desc, price: çanta.price })
              }
        }
        var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[2]})
        if(!çanta) return message.react("<:x_kinoshi:876867730639323187>")
        if(çanta.tane <= 2) {
          var user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
          var çanta = await idb.findOne({guild: message.guild.id, user: message.author.id, name: args[2]})
          await idb.findOneAndDelete({ guild: message.guild.id, user: message.author.id, name: args[2] });
        }
      }
      }
    }

    }
  }
