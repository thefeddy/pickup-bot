import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class DiscordService {

    private Discord = require('discord.js');
    private client = new this.Discord.Client();
    private messageEmbed = new this.Discord.MessageEmbed();
    private message = new this.Discord.Message();

    // Pickup 
    private mode = 'random';
    private size = 8;
    private running = false;
    private players: Array<any> = [];
    private blueTeam: Array<any> = [];
    private redTeam: Array<any> = [];
    private maps: Array<any> = [];
    private admin: any;

    // Envs     
    private prefix = process.env.DISCORD_PREFIX;

    constructor(private httpService: HttpService) { }

    public start() {
        this.ready();
        this.client.on('message', msg => {
            console.log(msg.author)
            // General Commands
            if (msg.content.startsWith(this.prefix + `help`)) {
                this.startPickup(msg);
            }

            // Pickup Admin
            if (msg.content.startsWith(this.prefix + `pickup`)) {
                this.startPickup(msg);
            }
            if (msg.content.startsWith(this.prefix + `setmode`)) {
                this.setPickupMode(msg);
            }

            if (msg.content.startsWith(this.prefix + `rmplayer`)) {
                this.addToPickup(msg);
            }

            if (msg.content.startsWith(this.prefix + `rmnom`)) {
                this.addToPickup(msg);
            }

            if (msg.content.startsWith(this.prefix + `cancel`)) {
                this.cancelPickup(msg);
            }

            if (msg.content.startsWith(this.prefix + `transfer`)) {
                this.addToPickup(msg);
            }

            // Pickup Player
            if (msg.content.startsWith(this.prefix + `request`)) {
                this.requestPickup(msg);
            }
            if (msg.content.startsWith(this.prefix + `add`)) {
                this.addToPickup(msg);
            }

            if (msg.content.startsWith(this.prefix + `teams`)) {
                this.setPickupMode(msg);
            }

            if (msg.content.startsWith(this.prefix + `players`)) {
                console.log(this.players);
                this.setPickupMode(msg);
            }

            if (msg.content.startsWith(this.prefix + `maplist`)) {
                this.setPickupMode(msg);
            }

            // Maps
            if (msg.content.startsWith(this.prefix + `maps`)) {
                this.setPickupMode(msg);
            }
            if (msg.content.startsWith(this.prefix + `map`)) {
                this.setPickupMode(msg);
            }

            // RCON Commands
            if (msg.content.startsWith(this.prefix + `rcon`)) {
                this.restartServer(msg);
            }

            // RCON Specific
            if (msg.content.startsWith(this.prefix + `rs`)) {
                this.restartServer(msg);
            }
            if (msg.content.startsWith(this.prefix + `changelevel`)) {
                this.restartServer(msg);
            }

            // Servers
            if (msg.content.startsWith(this.prefix + `server`)) {
                this.restartServer(msg);
            }
            if (msg.content.startsWith(this.prefix + `servers`)) {
                this.restartServer(msg);
            }
            if (msg.content.startsWith(this.prefix + `addserver`)) {
                this.restartServer(msg);
            }
            if (msg.content.startsWith(this.prefix + `rmserver`)) {
                this.restartServer(msg);
            }

            this.addMap(msg);
        });
        this.login();
    }

    private login(): void {
        this.client.login(process.env.DISCORD_TOKEN);
    }

    private ready(): void {
        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);
        });
    }

    private requestPickup(msg: any) {
        if (!this.running) {
            const op = msg.guild.roles.cache.find(role => role.name === 'op');
            this.messageEmbed
                .setColor('#0099ff')
                .setTitle('Requesting a Pickup!')
                .setDescription(`The <@&${op.id}>s have been pinged!`)
                .setFooter(
                    'Pickup Bot 0.0.1',
                );
            return this.client.channels.cache
                .get(msg.channel.id)
                .send(this.messageEmbed);
        }

    }

    // Pickup Functions   
    private startPickup(msg: any) {
        console.log(this.running)
        if (!this.running) {
            const pug = msg.guild.roles.cache.find(role => role.name === 'pug');
            this.running = true;
            this.players.push(msg.author);
            this.messageEmbed
                .setColor('#0099ff')
                .setTitle('Pick Up')
                .setDescription(`A Pickup has been started by ${msg.author.username}! type !add to join! <@&${pug.id}>`)
                .setFooter(
                    'Pickup Bot 0.0.1',
                );

        } else {
            this.messageEmbed
                .setColor('#0099ff')
                .setTitle('There is already a pickup started!')
                .setDescription(`Started by ${msg.author.username}`)
                .setFooter(
                    'Pickup Bot 0.0.1',
                );
        }


        return this.client.channels.cache
            .get(msg.channel.id)
            .send(this.messageEmbed);


    }

    private cancelPickup(msg: any) {
        if (this.running) {

        }
    }

    private addToPickup(msg: any) {
        if (this.running) {

        }
    }

    private setPickupMode(msg: any) {

    }

    private restartServer(msg: any) { }

    private addMap(msg: any) { }
}
