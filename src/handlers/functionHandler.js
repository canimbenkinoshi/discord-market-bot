const { GuildMember, TextChannel, MessageEmbed, Guild } = require("discord.js");


/**
 * @param {Client} client
 */
module.exports = async (client) => {
  /**
   * @param {Message} message
   * @param {String} text
   * @returns {Promise<void>}
   */
   Promise.prototype.sil = function(time) {
    if(this) this.then(message => {
      if(message.deletable) message.delete({ timeout: time * 1000 });
    });
    };

    Date.prototype.toTurkishFormatDate = function (format) {
      let date = this,
        day = date.getDate(),
        weekDay = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    
      let monthNames = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
      let dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
    
      if (!format) {
        format = "dd MM yyyy | hh:ii:ss";
      };
      format = format.replace("mm", month.toString().padStart(2, "0"));
      format = format.replace("MM", monthNames[month]);
      
      if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
      } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2, 2));
      };
      
      format = format.replace("dd", day.toString().padStart(2, "0"));
      format = format.replace("DD", dayNames[weekDay]);
    
      if (format.indexOf("HH") > -1) format = format.replace("HH", hours.toString().replace(/^(\d)$/, '0$1'));
      if (format.indexOf("hh") > -1) {
        if (hours > 24) hours -= 24;
        if (hours === 0) hours = 24;
        format = format.replace("hh", hours.toString().replace(/^(\d)$/, '0$1'));
      };
      if (format.indexOf("ii") > -1) format = format.replace("ii", minutes.toString().replace(/^(\d)$/, '0$1'));
      if (format.indexOf("ss") > -1) format = format.replace("ss", seconds.toString().replace(/^(\d)$/, '0$1'));
      return format;
    };
/*
    async function caner(asd, asd) {
      message.TextChannel.
    }
*/
};