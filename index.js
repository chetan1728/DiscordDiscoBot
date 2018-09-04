const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.js');


var renk_sayisi = 12;
var renkler = [];
var renk_pos = 0;


client.on('ready', () =>
{
      console.log(`Giriş Yapıldı ${client.user.tag}!`);
      setInterval(RenkAyarla, config.hiz);
});

function RenkAyarla()
{
      var sunucu = client.guilds.get('480044387540271104');
      var role = sunucu.roles.get(config.role_id);
      role.setColor(renkler[renk_pos]);
      if (++renk_pos >= renk_sayisi) renk_pos = 0;
}

function RenkleriOlustur()
{
      var max_renk = 255 * 255 * 255;
      var kat_sayi = max_renk / renk_sayisi;
      for (var i = 0; i < max_renk; i += kat_sayi)
      {
            var genelde_e1 = '#' + i.toString(16);
            renkler.append(genelde_e1);
      }
}


RenkleriOlustur();

client.login(config.token);