__NUXT_JSONP__("/install/upgrade-to-v2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax){return {data:[{document:{slug:"upgrade-to-v2",description:"",title:"Upgrading from 1.x",position:2.4,category:"Installation",toc:[{id:H,depth:k,text:I},{id:J,depth:k,text:K},{id:L,depth:k,text:M},{id:N,depth:k,text:O},{id:P,depth:k,text:Q},{id:R,depth:k,text:S},{id:T,depth:k,text:U},{id:V,depth:k,text:W},{id:X,depth:k,text:Y},{id:Z,depth:k,text:_},{id:$,depth:k,text:aa},{id:ab,depth:k,text:ac}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"In July 2021, we changed the way that Postal is installed. The only supported method for installing Postal is now using a container that we provide. You can follow these instructions to upgrade your 1.x installation to use containers."}]},{type:a,value:c},{type:b,tag:l,props:{id:H},children:[{type:b,tag:i,props:{href:"#how-do-i-know-if-im-using-postal-v1",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"There are a few changes between the two versions which should help identify your version."}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The Postal web interface now has a footer on all pages (except the login page) which show the current version. If you have no footer, you're not using Postal v2."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you installed Postal without using containers, you are most likely using Postal v1."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:ad},{type:b,tag:d,props:{},children:[{type:a,value:"ps aux | grep procodile"}]},{type:a,value:" and get any results, you are using Postal v1."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:ad},{type:b,tag:d,props:{},children:[{type:a,value:"docker ps"}]},{type:a,value:" and get no results, you are using Postal v1."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you installed Postal before July 2021, you are using Postal v1."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you have an "},{type:b,tag:d,props:{},children:[{type:a,value:ae}]},{type:a,value:" directory you are using Postal v1 (or you have already upgraded to Postal v2 but not tidied up)."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{id:J},children:[{type:b,tag:i,props:{href:"#assumptions",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"For the purposes of this guide, we're going to make some assumptions about your installation. If any of these assumptions are not true, you will need to determine the appropriate route for you to upgrade."}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You have Postal installed on a single server."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Your server has a MariaDB (or MySQL) database server running on it and listening port 3306."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Your server has a RabbitMQ server running on it and listening on port 5672."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Your current installation is located at "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fopt\u002Fpostal"}]},{type:a,value:" and your configuration is in "},{type:b,tag:d,props:{},children:[{type:a,value:A}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You use a web proxy (such as nginx, Caddy or Apache) in front of the Postal web server."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:a,value:"\nPerforming this upgrade will mean that your Postal services will be unavailable for a short period of time. We recommend scheduling some maintenance and performing the upgrade when traffic is low.\n"}]},{type:a,value:c},{type:b,tag:l,props:{id:L},children:[{type:b,tag:i,props:{href:"#preparation",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"There are a few extra system dependencies that you need to install."}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fget-docker\u002F",rel:[af,ag,ah],target:ai},children:[{type:a,value:"Docker"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fcompose\u002Finstall\u002F",rel:[af,ag,ah],target:ai},children:[{type:a,value:"docker-compose"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:D,props:{type:aj},children:[{type:a,value:c},{type:b,tag:ak,props:{},children:[{type:a,value:al}]},{type:a,value:" use the latest versions of these rather than simply just installing the latest package available from your operating system vendor's repositories. Instructions are linked above.\n"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If you're running an old or unsupported version of your operating system, you may wish to use this as an opportunity to upgrade. The method for doing so is outside of the scope of this documentation."}]},{type:a,value:c},{type:b,tag:l,props:{id:N},children:[{type:b,tag:i,props:{href:"#stopping-postal",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Start by stopping the Postal processes using "},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:l,props:{id:P},children:[{type:b,tag:i,props:{href:"#configuring-web-proxy-for-openclick-tracking",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In Postal 2.x onwards, we no longer provide a dedicated server process for serving requests for open & click tracking. If you don't use this, you can skip to the next section. However, if you do, you need to add some configuration to your web proxy and issue some SSL certificates."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"For all the "},{type:b,tag:"strong",props:{},children:[{type:a,value:"Tracking Domains"}]},{type:a,value:" that you have configured (for example "},{type:b,tag:d,props:{},children:[{type:a,value:"track.yourdomain.com"}]},{type:a,value:") you will need to do the following:"}]},{type:a,value:c},{type:b,tag:am,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Configure a virtual host in your web proxy to route all requests for each tracking domain to the Postal web server (on port 5000)."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Ensure that all requests going through the proxy have the "},{type:b,tag:d,props:{},children:[{type:a,value:"X-Postal-Track-Host: 1"}]},{type:a,value:" header."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Issue an SSL certificate for all these hosts."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Ensure that your web proxy is listening on the IP address that you previously used for the Postal "},{type:b,tag:d,props:{},children:[{type:a,value:"fast_server"}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"As there is no longer a requirement for Postal to have two IP addresses, you can update all your DNS records that reference your secondary IP to point to the main IP that you use for Postal."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{id:R},children:[{type:b,tag:i,props:{href:"#checking-configuration",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Your existing configuration for Postal can remain in the same place as it was before at "},{type:b,tag:d,props:{},children:[{type:a,value:A}]},{type:a,value:". If you have referenced any other files in your "},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:", you will need to ensure that these files are within the "},{type:b,tag:d,props:{},children:[{type:a,value:A}]},{type:a,value:" folder and you replace the path with "},{type:b,tag:d,props:{},children:[{type:a,value:an}]},{type:a,value:". For example, if you have this:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,ao]},children:[{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{className:[h,t,u]},children:[{type:a,value:ap}]},{type:b,tag:f,props:{className:[h,v]},children:[{type:a,value:w}]},{type:a,value:B},{type:b,tag:f,props:{className:[h,t,u]},children:[{type:a,value:aq}]},{type:b,tag:f,props:{className:[h,v]},children:[{type:a,value:w}]},{type:a,value:ar},{type:b,tag:f,props:{className:[h,as,at]},children:[{type:a,value:j}]},{type:a,value:B},{type:b,tag:f,props:{className:[h,t,u]},children:[{type:a,value:au}]},{type:b,tag:f,props:{className:[h,v]},children:[{type:a,value:w}]},{type:a,value:" \u002Fopt\u002Fpostal\u002Fconfig\u002Fsmtp.crt\n  "},{type:b,tag:f,props:{className:[h,t,u]},children:[{type:a,value:av}]},{type:b,tag:f,props:{className:[h,v]},children:[{type:a,value:w}]},{type:a,value:" \u002Fopt\u002Fpostal\u002Fconfig\u002Fsmtp.key\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You will need to update "},{type:b,tag:d,props:{},children:[{type:a,value:A}]},{type:a,value:" to "},{type:b,tag:d,props:{},children:[{type:a,value:an}]},{type:a,value:" as follows:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,ao]},children:[{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{className:[h,t,u]},children:[{type:a,value:ap}]},{type:b,tag:f,props:{className:[h,v]},children:[{type:a,value:w}]},{type:a,value:B},{type:b,tag:f,props:{className:[h,t,u]},children:[{type:a,value:aq}]},{type:b,tag:f,props:{className:[h,v]},children:[{type:a,value:w}]},{type:a,value:ar},{type:b,tag:f,props:{className:[h,as,at]},children:[{type:a,value:j}]},{type:a,value:B},{type:b,tag:f,props:{className:[h,t,u]},children:[{type:a,value:au}]},{type:b,tag:f,props:{className:[h,v]},children:[{type:a,value:w}]},{type:a,value:" \u002Fconfig\u002Fsmtp.crt\n  "},{type:b,tag:f,props:{className:[h,t,u]},children:[{type:a,value:av}]},{type:b,tag:f,props:{className:[h,v]},children:[{type:a,value:w}]},{type:a,value:" \u002Fconfig\u002Fsmtp.key\n"}]}]}]},{type:a,value:c},{type:b,tag:D,props:{type:aj},children:[{type:a,value:c},{type:b,tag:ak,props:{},children:[{type:a,value:al}]},{type:a,value:" if you have referenced files in other parts of your operating system (such as in "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fetc"}]},{type:a,value:"), you must ensure these are now within the `\u002Fopt\u002Fpostal\u002Fconfig` directory otherwise they won't be available within the container that Postal runs within.\n"}]},{type:a,value:c},{type:b,tag:l,props:{id:T},children:[{type:b,tag:i,props:{href:"#removing-the-old-postal-helper-script",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Run the following command to backup the old Postal helper script."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"mv \u002Fusr\u002Fbin\u002Fpostal \u002Fusr\u002Fbin\u002Fpostal.v1\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{id:V},children:[{type:b,tag:i,props:{href:"#installing-postal-v2",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The next thing to do is to download the new Postal installation helpers repo and set up the new "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:" command."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"git clone https:\u002F\u002Fpostalserver.io\u002Fstart\u002Finstall \u002Fopt\u002Fpostal\u002Finstall\nsudo ln -s \u002Fopt\u002Fpostal\u002Finstall\u002Fbin\u002Fpostal \u002Fusr\u002Fbin\u002Fpostal\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Next, run a normal upgrade using the new Postal command line helper. This will run a new image to upgrade your database schema to that required for Postal v2."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"postal upgrade\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Finally, you can start the Postal components."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"postal start\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You should now find that Postal is running again and working as normal. Confirm that all process types are running using "},{type:b,tag:d,props:{},children:[{type:a,value:aw}]},{type:a,value:". Your output should look like this:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"      Name                     Command               State   Ports\n------------------------------------------------------------------\npostal_cron_1       \u002Fdocker-entrypoint.sh post ...   Up\npostal_requeuer_1   \u002Fdocker-entrypoint.sh post ...   Up\npostal_smtp_1       \u002Fdocker-entrypoint.sh post ...   Up\npostal_web_1        \u002Fdocker-entrypoint.sh post ...   Up\npostal_worker_1     \u002Fdocker-entrypoint.sh post ...   Up\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{id:X},children:[{type:b,tag:i,props:{href:"#a-note-about-smtp-ports",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If you were previously running the Postal SMTP server on any port other than 25, you can revert this configuration and have Postal listen on this port directly. To do this, you can remove any "},{type:b,tag:d,props:{},children:[{type:a,value:"iptables"}]},{type:a,value:" rules you might have and update your "},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:" with the new port number."}]},{type:a,value:c},{type:b,tag:l,props:{id:Z},children:[{type:b,tag:i,props:{href:"#rolling-back",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If something goes wrong and you need to rollback to the previous version you can still do that by reverting the "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:" helper and starting it again."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,y]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"postal stop\nunlink \u002Fusr\u002Fbin\u002Fpostal\nmv \u002Fusr\u002Fbin\u002Fpostal.v1 \u002Fusr\u002Fbin\u002Fpostal\npostal start\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{id:$},children:[{type:b,tag:i,props:{href:"#tidying-up",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"When you're happy that everything is running nicely, there are some final things you should do:"}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:G},{type:b,tag:d,props:{},children:[{type:a,value:ae}]},{type:a,value:". This is where the application itself lived and is no longer required."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:G},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fopt\u002Fpostal\u002Flog"}]},{type:a,value:". Logs are no longer stored here."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:G},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fopt\u002Fpostal\u002Fvendor"}]},{type:a,value:". This is no longer used."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Remove the backup Postal helper tool from "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fusr\u002Fbin\u002Fpostal.v1"}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you changed any tracking domains to use your main IP address, you can remove the additional IP from the server after checking that all DNS updates have applied."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{id:ab},children:[{type:b,tag:i,props:{href:"#installing-on-a-new-server-with-existing-data",ariaHidden:j,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:ac}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If you want to simply install Postal on a new server and copy your data over, you can do so by following these instructions."}]},{type:a,value:c},{type:b,tag:am,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Create your new server and follow the instructions for installing Postal. You should have a working installation at this point."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"On your old server, stop Postal using "},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:". Make sure it has fully stopped before continuing using "},{type:b,tag:d,props:{},children:[{type:a,value:aw}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"On your new server, stop Postal using "},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Use whatever tool takes your fancy ("},{type:b,tag:d,props:{},children:[{type:a,value:"mysqldump"}]},{type:a,value:", "},{type:b,tag:d,props:{},children:[{type:a,value:"Mariabackup"}]},{type:a,value:" etc...) to copy your databases to your new server. Make sure you copy the "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:" database as well as all other databases prefixed with "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:" (or whatever you have configured your prefix to be in the "},{type:b,tag:d,props:{},children:[{type:a,value:"message_db"}]},{type:a,value:" part of your configuration)."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Ensure that your "},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:" is merged appropriately. For example, make sure your "},{type:b,tag:d,props:{},children:[{type:a,value:"dns"}]},{type:a,value:" section is correct. There is no need to copy the "},{type:b,tag:d,props:{},children:[{type:a,value:"rails.secret"}]},{type:a,value:" - a new secret on the new host won't be a problem."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you stopped Postal cleanly before beginning, there is no need to copy any persisted data from RabbitMQ."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Shutdown your old Postal server."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Move the IP address(es) from the old server to the new one (if both old and new servers are with the same provider)."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Start Postal on the new server using "},{type:b,tag:d,props:{},children:[{type:a,value:"postal start"}]},{type:a,value:x}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Finstall",path:"\u002Fen\u002Finstall\u002Fupgrade-to-v2",extension:".md",createdAt:ax,updatedAt:ax,to:"\u002Finstall\u002Fupgrade-to-v2"},prev:{title:"DNS configuration",path:"\u002Fen\u002Finstall\u002Fdns-configuration",to:"\u002Finstall\u002Fdns-configuration"},next:{title:"Click & Open Tracking",path:"\u002Fen\u002Ffeatures\u002Fclick-and-open-tracking",to:"\u002Ffeatures\u002Fclick-and-open-tracking"}}],fetch:{},mutations:[]}}("text","element","\n","code","li","span","p","token","a","true",2,"h2",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","key","atrule","punctuation",":",".","language-text","ul","\u002Fopt\u002Fpostal\u002Fconfig","\n  ","postal","alert","postal stop","postal.yml","Remove ","how-do-i-know-if-im-using-postal-v1","How do I know if I'm using Postal v1?","assumptions","Assumptions","preparation","Preparation","stopping-postal","Stopping Postal","configuring-web-proxy-for-openclick-tracking","Configuring web proxy for open\u002Fclick tracking","checking-configuration","Checking configuration","removing-the-old-postal-helper-script","Removing the old Postal helper script","installing-postal-v2","Installing Postal v2","a-note-about-smtp-ports","A note about SMTP ports","rolling-back","Rolling back","tidying-up","Tidying up","installing-on-a-new-server-with-existing-data","Installing on a new server with existing data","If you run ","\u002Fopt\u002Fpostal\u002Fapp","nofollow","noopener","noreferrer","_blank","warning","b","Important:","ol","\u002Fconfig","language-yaml","smtp_server","tls_enabled"," ","boolean","important","tls_certificate_path","tls_private_key_path","postal status","2021-08-09T14:31:55.081Z")));