<template>
  <div class="register-wrapper">
    <div class="register" ref="content">
      <div class="container">
        <div class="left">
          <div class="title">欢迎注册
           
          </div>
          <div class="input-item">
            <div class="input-wrapper">
              <input type="email" placeholder="请输入邮箱" v-model="email">
              <button class="input-btn" @click="sendEmail" :plain="true" ref="sendEmail">{{content}}</button>
            </div>
            <div class="input-wrapper">
              <input type="text" placeholder="请输入邮箱验证码" v-model="code">
            </div>
            <div class="input-wrapper">
              <input type="password" placeholder="请输入密码" v-model="passWord" >
            </div>
            <div class="input-wrapper">
              <input type="password" placeholder="请输入确认密码" v-model="confirmPassword" >
            </div>
            <div id="register_yanzhengma" class="register-yzm"></div>
          </div>
          <div class="register-btn" @click="register">注册</div>

            <div class="select-wrapper">
              <div>
              <i :class="{active:this.agree}" @click="handleAgree" ref="isAgree"></i>我已仔细阅读并同意<span @click="showProtocol">《注册协议》</span>
              </div>
               <router-link to="/login" tag="div" class="login-btn">登录</router-link>
            </div>
        </div>
        <div class="right">
          <img src="../assets/images/login-bg.png" alt="">
        </div>
      </div>
    </div>
    <el-dialog title="注册协议" :visible.sync="dialogFormVisible">
       <div class="protocol">
          <div>服务条款</div> 
       <div>2018年9月31日更新及生效</div> <br>
       <div>请仔细阅读这些服务条款（以下简称为“本条款”）。通过点击“创建帐户”按钮或通过访问或使用本服务，您同意遵守本条款及所有附加条款。如果您不同意受本条款的约束，请勿访问或使用本服务。</div> 
       <div>FORTUNEBUS保留随时更改或修改本条款中所含内容的权利，包括但不限于本网站的任何政策或准则。我们会将修改后的条款发布到本网站，并将“最后更新”日期列在本条款顶部，或通过电子邮件发送给用户提供的注册邮箱，或以FORTUNEBUS确定的任何其他方式自行决定。任何更改会在发布网站更新后或声明更改后立即生效。更改将持续生效。您放弃接收有关此类更改的特定通知的权利。继续使用本网站表示您接受此类更改。如果您不同意本条款，请立即停止使用本网站。我们希望您经常回顾本条款，以确保您了解适用于您访问和使用本服务的条款和条件。如果您在使用本网站中有任何疑问，请联系service@fortunebus.io。
</div> <br>
    <div>本条款及附加条款适用于您的访问和使用由 FORTUNEBUS ONLINE PTE. LTD. （以下简称“FORTUNEBUS”、“本公司”或“我们”）提供的任何服务，包括但不限于网站https://www.fortunebus.io/（以下简称“FORTUNEBUS”、“本公司”或“我们”）以及我们提供的移动应用程序和交易所服务（统称为“本服务”）。签订其他有关本网站所提供的产品的相关协议不会影响本条款的生效。如果您代表任何机构使用本服务，您声明并保证（a）该机构是符合当地法律法规的合法机构，（b）您有权代表该机构接受本条款。如果您违反本条款，该机构同意对您的行为负责。</div>
    <div>
      FORTUNEBUS ONLINE PTE. LTD. 经营的https://www.fortunebus.io，是根据新加坡公司法成立的数字资产虚拟交易平台。
    </div><br>
    <div>I.适用范围</div>
<div>
  
本服务仅适用于18岁或以上的用户。通过访问或使用我们的服务，您声明并确保您至少年满18岁，没有被剥夺过适用本服务的权利。您也保证您不在任何贸易或经济制裁清单中，如联合国安理会制裁清单，也不受欧洲联盟、香港金融管理局、香港海关等香港行政执法机构限制或禁止适用任何交易平台。此外，FORTUNEBUS可能不会在所有国家或地区提供本服务，并可能会对受限制地区的用户提供部分或不提供本服务，其中包括中国香港，古巴、伊朗、朝鲜、克里米亚、苏丹、马来西亚、叙利亚、美国[包括所有美国领土，如波多黎各、美属萨摩亚、关岛、北马里亚纳群岛邦、美属维尔京群岛（圣克罗伊岛，圣约翰岛和圣托马斯岛）]、孟加拉国、玻利维亚、厄瓜多尔和吉尔吉斯斯坦。本协议内容不受用户所属国家或地区法律的排斥。因此，如果您不符合这些要求，请勿使用我们的服务。
</div><br>
<div>II.我们的服务描述</div>
<div>
我们提供一个包含数字资产的在线交易平台，用于交易数字资产和衍生品，并提供保证金贷款服务。交易者在我们的平台上进行交易; FORTUNEBUS作为平台提供商不参与实际交易。交易者必须在开始交易之前开立账户并预存数字资产。
FORTUNEBUS会尽力确保网站上信息的准确性。网站上的信息和内容如有更改，恕不另行通知，且仅为协助用户以做出独立决定。 FORTUNEBUS已采取合理措施确保网站信息的准确性。但是，我们不保证本网站所提供的任何服务或产品内容的准确性，适用性，可靠性，完整性，性能和/或恰当性，且不对任何直接或间接造成的损失或损害，信息传递的延迟或失败承担责任。 FORTUNEBUS对此类信息的使用或解释不承担任何责任。
用户必须自行准备如下设备和承担如下开支：
（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他上网装置；
（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。
用户在接受FORTUNEBUS网各项服务的同时，同意接受FORTUNEBUS网提供的各类信息服务。用户在此授权FORTUNEBUS可以向其电子邮件、手机、通信地址等发送商业信息。用户有权选择不接受FORTUNEBUS网提供的各类信息服务，并进入FORTUNEBUS网相关页面进行更改。
</div>
<div>
  此外，我们可能会收集位于欧洲经济区（“EEA”）内的个人和实体的个人资料。根据“通用数据保护条例”（“GDPR”），我们需要保护在EEA处理的个人数据。为了便利我们为位于欧洲经济区的客户提供的服务，我们要求明确同意将个人数据从欧洲经济区转移到该地区以外。如果您是位于欧洲经济区的个人，并且您拒绝同意此类转账，您将不再能够使用FORTUNEBUS和我们的服务。您将有能力撤回您的数字资产和法定货币;但是，所有其他功能将被禁用。有关我们如何收集，使用和共享您的信息的资料，请参阅我们的隐私政策。
用户理解并同意，FORTUNEBUS的服务是按照现有技术和条件所能达到的现状提供的。FORTUNEBUS会尽最大努力向用户提供服务，确保服务的连贯性和安全性；但FORTUNEBUS不能随时预见和防范法律、技术以及其他风险，包括但不限于不可抗力、病毒、木马、黑客攻击、系统不稳定、第三方服务瑕疵、政府行为等原因可能导致的服务中断、数据丢失以及其他的损失和风险。
</div>
<div>
系统平台因下列状况无法正常运作，使用户无法使用各项服务或不能正常委托时，FORTUNEBUS不承担损害赔偿责任，该状况包括但不限于：
</div>
<div>A．FORTUNEBUS平台公告之系统停机维护期间；</div>
<div>B．电信设备出现故障不能进行数据传输的；</div>
<div>C．因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成FORTUNEBUS平台系统障碍不能执行业务的；</div>
<div>D．由于黑客攻击、计算机病毒侵入或发作、电信部门技术调整或故障、网站升级、银行方面的问题、因政府管制而造成的暂时性关闭等影响网络正常经营的原因而造成的服务中断或者延迟；
</div>
<div>E．因为行业现有技术力量无法预测或无法解决的技术问题而造成的损失；</div>
<div>F．因第三方的过错或者延误而给用户或者其他第三方造成的损失。</div>
<div>
由于系统故障，网络原因，DDos等黑客攻击等意外因素可能导致的异常成交，行情中断，以及其他可能的异常情况，FORTUNEBUS有权根据实际情况取消异常成交结果，以及回滚某一段时间的所有成交。</div>
<div>FORTUNEBUS的部分服务是以收费方式提供的，如用户使用收费服务，请遵守相关的协议。FORTUNEBUS可能根据实际需要对收费服务的收费标准、方式进行修改和变更，FORTUNEBUS也可能会对部分免费服务开始收费。前述修改、变更或开始收费前，FORTUNEBUS将在相应服务页面进行通知或公告。如果用户不同意上述修改、变更或付费内容，则应停止使用该服务。</div>





<div>FORTUNEBUS网不会向任何用户索取密码，不会让用户往任何非本站交易中心里提供的帐户、btc/ltc充值地址打款，请大家不要相信任何FORTUNEBUS网打折、优惠等信息，往非btc/ltc交易中心提供的账户、地址里打款或币所造成的损失本站不负责任。</div>
<div>交易异常处理：用户使用本服务时同意并认可，可能由于数字货币网络连线问题或其他不可抗拒因素，造成本服务无法提供。用户确保所输入的您的资料无误，如果因资料错误造成本网站于上述异常状况发生时，无法及时通知用户相关交易后续处理方式的，本网站不承担任何损害赔偿责任。</div>
<div>用户同意，基于运行和交易安全的需要，本网站可以暂时停止提供或者限制本服务部分功能, 或提供新的功能，在任何功能减少、增加或者变化时，只要用户仍然使用本服务，表示用户仍然同意本协议或者变更后的协议。</div>
<div>本网站有权了解用户使用本网站产品或服务的真实交易背景及目的，用户应如实提供本网站所需的真实、全面、准确的信息；如果本网站有合理理由怀疑用户提供虚假交易信息的，本公司有权暂时或永久限制用户所使用的产品或服务的部分或全部功能。</div><br>
<div>III.交易数字资产的风险</div>
<div>数字资产交易涉及重大风险。交易或持有数字资产很有可能会造成您的损失。因此，您应该根据自己的财务状况，仔细考虑是否要交易数字资产或相关衍生品及使用杠杆。</div>
<div>1、FORTUNEBUS认为，数字资产不应该被称为钱和法定货币，因为它们不以政府或中央银行为后盾支持。FORTUNEBUS不能保证数字资产市场的有序稳定。您应该在数字资产（以及任何其他资产）交易中保持谨慎。价格会随时波动。由于价格波动，您可能会有大额的盈利或亏损。任何数字资产或交易头寸都可能发生大幅度波动，甚至可能变得毫无价值。</div>
<div>2、在使用本服务时，若用户或用户的交易指令出现错误（包括但不限于价格、数量等因素）而使用户的交易出现损失时，如果非本站交易规则的原因，损失责任将由用户自己承担。</div>
<div>3、因用户的过错导致的任何损失由用户自行承担，该过错包括但不限于：不按照交易提示操作，未及时进行交易操作，遗忘或泄漏密码，密码被他人破解，用户使用的计算机被他人侵入。</div>
<div>4、在使用本服务时，若用户因为网站交易规则中潜在的尚未发现的某种漏洞而产生的不当得利，本站将联系用户追回，您必须有效予以配合，否则本站将采取包括但不限于限制账户交易、冻结账户资金、向有管辖权的法院起诉等追索措施，因用户不予有效配合而给FORTUNEBUS产生的追索费用也将由您承担。</div><br>

<div>IV.创建账户</div>
<div>为了使用本平台任何服务，您必须首先通过提供您的姓名，电子邮件和密码注册账户，以及确认接受本服务条款。您同意不允许任何人使用、指导您的帐户，并向FORTUNEBUS更新您的任何信息更改，或者您的帐户是否被盗用。您有责任保留，保护和保障任何已提供给您的密钥，证书，密码，访问代码，用户ID或其他凭据和登录信息（统称为“密码”），或是由您使用服务生成的上述密码。如果您丢失密码，可能无法访问您的帐户。您同意立即通知FORTUNEBUS任何未经授权使用您密码的事宜。由于未经授权使用您的密码而导致的任何责任，损失或损害，FORTUNEBUS将不承担任何责任。由于本站是交易网站，登录密码、提现密码、交易密码、短信密码、谷歌密码等不得使用相同密码，否则会有安全隐患，相关责任由用户自身承担。</div>
<div>用户有权选择是否成为FORTUNEBUS网用户，用户选择成为FORTUNEBUS网注册用户的，可自行创建、修改昵称。用户名和昵称的命名及使用应遵守相关法律法规并符合网络道德。用户名和昵称中不能含有任何侮辱、威胁、淫秽、谩骂等侵害他人合法权益的文字。</div>
<div>用户一旦注册成功，成为FORTUNEBUS网的用户，将得到用户名（用户邮箱）和密码，并对以此组用户名和密码登入系统后所发生的所有活动和事件负责，自行承担一切使用该用户名的言语、行为等而直接或者间接导致的法律责任。</div>
<div>用户密码遗失的，可以通过注册电子邮箱发送的链接重置密码，以手机号码注册的用户可以凭借手机号码找回原密码。用户若发现任何非法使用用户名或存在其他安全漏洞的情况，应立即告知FORTUNEBUS网。</div>
<br>
<div>V.用户权利及许可使用限制</div>
<div>根据本条款，我们授予您有限的，非排他性的，不可转让的许可权限，以访问和使用FORTUNEBUS网站和服务，仅用于FORTUNEBUS许可的核准目的。您同意，您不得以任何其他方式复制，传播，分销，销售，许可，逆向工程，修改，发布或参与转让或出售创作衍生作品，或以任何其他方式利用任何FORTUNEBUS的内容。</div>
<div>您同意：</div>
<div>1. 服务及相关软件，网站和技术的所有权利，所有权和利益，包括其中的所有知识产权，均属于FORTUNEBUS;</div>
<div>2.除本许可授予的有限许可权限外，不得转让本服务的权利或利益;</div>
<div>3.本服务受版权及其他知识产权法保护。FORTUNEBUS保留所有根据本条款未明确授予的权利;</div>
<div>4.本网站有权按照包括但不限于公安机关、检察机关、法院、海关、税务机关等司法机关、行政机关、军事机关的要求对用户在账户的物品及账户等进行查询、冻结或扣划;</div>
<div>5.用户有权根据网站相关规定，在发布信息等贡献后，取得FORTUNEBUS网给予的奖励；</div>
<div>6.用户有权修改其个人账户中各项可修改信息，自行选择昵称和录入介绍性文字，自行决定是否提供非必填项的内容；</div>
<div>7.用户有权参加FORTUNEBUS网组织提供的各项线上、线下活动；</div>
<div>8.用户有权根据FORTUNEBUS网网站规定，享受FORTUNEBUS网提供的其它各类服务；</div>
<div>9.用户对本协议的修改有异议，或对FORTUNEBUS网的服务不满，可以行使如下权利：</div>
<div>（1）停止使用FORTUNEBUS网的网络服务；</div>
<div>（2）通过客服等渠道告知FORTUNEBUS网停止对其服务。 结束服务后，用户使用FORTUNEBUS网络服务的权利立即终止。在此情况下，FORTUNEBUS网没有义务传送任何未处理的信息或未完成的服务给用户或任何无直接关系的第三方。</div>
<br>
<div>VI.用户义务</div>
<div>1、不得利用本站危害国家安全、泄露国家秘密，不得侵犯国家社会集体的和公民的合法权益，不得利用本站制作、复制和传播下列信息：</div>
<div>（1）煽动抗拒、破坏宪法和法律、行政法规实施的；</div>
<div>（2）煽动颠覆国家政权，推翻社会主义制度的；</div>
<div>（3）煽动分裂国家、破坏国家统一的；</div>
<div>（4）煽动民族仇恨、民族歧视，破坏民族团结的；</div>
<div>（5）捏造或者歪曲事实，散布谣言，扰乱社会秩序的；</div>
<div>（6）宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；</div>
<div>（7）公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；</div>
<div>（8）损害国家机关信誉的；</div>
<div>（9）其他违反宪法和法律行政法规的；</div>
<div>（10）进行商业广告行为的。</div>
<div>2、用户不得通过任何手段恶意注册FORTUNEBUS网站帐号，包括但不限于以牟利、炒作、套现、获奖等为目的多个账号注册。用户亦不得盗用其他用户帐号。</div>
<div>如用户违反上述规定，则FORTUNEBUS网有权直接采取一切必要的措施，包括但不限于删除用户发布的内容、取消用户在网站获得的星级、荣誉以及虚拟财富，暂停或查封用户帐号，取消因违规所获利益，乃至通过诉讼形式追究用户法律责任等。</div>
<div>3、禁止用户将FORTUNEBUS网以任何形式作为从事各种非法活动的场所、平台或媒介。未经FORTUNEBUS网的授权或许可，用户不得借用本站的名义从事任何商业活动，也不得以任何形式将FORTUNEBUS网作为从事商业活动的场所、平台或媒介。</div>
<div>如用户违反上述规定，则FORTUNEBUS网有权直接采取一切必要的措施，包括但不限于删除用户发布的内容、取消用户在网站获得的星级、荣誉以及虚拟财富，暂停或查封用户帐号，取消因违规所获利益，乃至通过诉讼形式追究用户法律责任等。</div>
<div>4、用户在FORTUNEBUS网以各种形式发布的一切信息，均应符合国家法律法规等相关规定及网站相关规定，符合社会公序良俗，并不侵犯任何第三方主体的合法权益，否则用户自行承担因此产生的一切法律后果，且FORTUNEBUS因此受到的损失，有权向用户追偿。</div>
<br>
<div>VII.服务费用</div>
<div>1、在用户使用本服务时，本公司有权按相应规则向用户收取服务费用。FORTUNEBUS拥有制订及调整服务费之权利，具体服务费用以用户使用本服务时FORTUNEBUS网上所列之收费方式公告或用户与FORTUNEBUS网达成的其他书面协议为准。</div>
<div>2、除非另有说明或约定，用户同意FORTUNEBUS网有权自用户账户的资产中中直接扣除上述服务费用。</div>
<br>
<div>VIII.服务的变更、中断、终止、限制、冻结</div>
<div>1、 FORTUNEBUS可能会对服务内容进行变更，也可能会中断、中止或终止服务。</div>
<div>2、转让时，FORTUNEBUS可向第三方转让本服务下相关资产；FORTUNEBUS也可在单方通知您后，将本协议下部分或全部服务转交由第三方运营或履行。具体受让主体以FORTUNEBUS通知的为准。</div>
<div>3、如发生下列任何一种情形，FORTUNEBUS有权不经通知而中断或终止向您提供的服务：</div>
<div>（1）根据法律规定您应提交真实信息，而您提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明；</div>
<div>（2）您违反相关法律法规或本协议的约定；</div>
<div>（3）按照法律规定或主管部门的要求；</div>
<div>（4）出于安全的原因或其他必要的情形。</div>
<div>4、FORTUNEBUS有权按本协议的约定进行收费。若您未按时足额付费，FORTUNEBUS有权中断、中止或终止提供服务。</div>
<div>5、您可以随时关闭您的帐户。您仍然有义务履行您对任何待处理交易的责任。此外，您将对关闭前发生的任何费用向FORTUNEBUS负责。 FORTUNEBUS还可以随时自行决定终止您的账户，通过电子邮件或其他方式通知您。如果有嫌疑显示您未能遵守这些条款、对FORTUNEBUS构成不可接受的欺诈或管理风险，或者您提供给我们虚假，不完整，不准确或误导性的信息，FORTUNEBUS可能会暂停您的访问服务。由于FORTUNEBUS关闭或暂停您的帐户所造成的任何损失，FORTUNEBUS将不承担任何责任。</div>
<div>6、用户同意，为了用户的账户及其内数字货币的安全，根据本协议的约定、法律法规及法律文书的规定、政府依行政职权的要求及本公司依据自行判断认为的可能对用户的账户产生风险的情况，本网站有权对用户名下的全部或部分账户进行冻结，即进行暂时关闭这些账户部分或全部使用权限的操作。冻结的逆过程为解冻，即本网站对被冻结的账户结束冻结。当冻结发生时，如用户申请解冻，本网站有权依照自行判断根据本项规定前述的冻结原因来决定是否允许全部或部分解冻，用户应充分理解解冻申请并不必然被允许，且申请解冻时用户应当配合本网站核实用户的身份的有关要求，提供包括但不限于身份信息、身份证、护照、其他有效的身份证明文件及本公司要求的其他信息或文件。</div>
<br>
<div>IX.符合您的当地法律</div>
<div>您个人有责任确定是否以及在多大程度上，向相关税务机关缴纳通过服务进行的任何交易所得收入并扣除正确数额后所对应的税款。此外，您同意遵守当地所有相关法律。 关于防止资助恐怖主义和反洗钱活动，由于FORTUNEBUS不是香港《打击洗钱及恐怖分子资金筹集 ( 金融机构 ) 条例》附表1第2部的“金融机构（financial institution）”，FORTUNEBUS自愿酌情进行尽职调查，以防止洗钱和恐怖主义融资风险，并将与地方当局合作。使用我们的服务时，您确认您的行为是以合法和正确的方式，您的数字资产和法定货币并非来源于非法活动。 FORTUNEBUS可以酌情或与当地执法机关协调以控制、限制或清空您的账户、法定货币和数字资产。</div>
<br>
<div>X.隐私政策</div>
<div>FORTUNEBUS尊重用户的隐私。 FORTUNEBUS隐私政策单独提供，描述了FORTUNEBUS如何收集，存储，披露和使用与您的隐私相关的信息。您同意FORTUNEBUS根据FORTUNEBUS隐私政策的条款使用您的信息。</div>
<div>本协议所称之FORTUNEBUS网用户信息是指符合法律、法规及相关规定，并符合下述范围的信息：</div>
<div>（1）用户注册FORTUNEBUS网时，向FORTUNEBUS网提供的个人信息；</div>
<div>（2）用户在使用FORTUNEBUS网服务、参加网站活动或访问网站网页时，FORTUNEBUS网自动接收并记录的用户浏览器端或手机客户端数据，包括但不限于IP地址、网站Cookie中的资料及用户要求取用的网页记录；</div>
<div>（3）FORTUNEBUS网从商业伙伴处合法获取的用户个人信息；</div>
<div>（4）其它FORTUNEBUS网通过合法途径获取的用户个人信息。</div>
<div>FORTUNEBUS网承诺：</div>
<div>非经法定原因或用户事先许可，FORTUNEBUS网不会向任何第三方透露用户的密码、姓名、手机号码等非公开信息;</div>
<div>在下述法定情况下，用户的个人信息将会被部分或全部披露：</div>
<div>（1）经用户同意向用户本人或其他第三方披露；</div>
<div>（2）根据法律、法规等相关规定，或行政机构要求，向行政、司法机构或其他法律规定的第三方披露；</div>
<div>（3）其它FORTUNEBUS网根据法律、法规等相关规定进行的披露。</div>
<br>
<div>XI.赔偿</div>
<div>您将赔偿FORTUNEBUS及其代理商（如有），员工，高级职员，董事，关联公司，子公司和继承者，以使他们免受所有第三方索赔所构成的损害，除非是由FORTUNEBUS单独违反本条款而导致的。同样地，除了因为您单独违反这些条款之外，FORTUNEBUS也应赔偿您和您的代理人，员工，高级职员，董事，关联公司，子公司和继承者免受所有第三方索赔所导致的损失。</div>
<br>
<div>XII.拒绝担保与免责</div>
<div>1、FORTUNEBUS网作为“网络服务提供者”的第三方平台，不担保网站平台上的信息及服务能充分满足用户的需求。对于用户在接受FORTUNEBUS网的服务过程中可能遇到的错误、侮辱、诽谤、不作为、淫秽、色情或亵渎事件，FORTUNEBUS网不承担法律责任。</div>
<div>2、基于互联网的特殊性，FORTUNEBUS网也不担保服务不会受中断，对服务的及时性、安全性都不作担保，不承担非因FORTUNEBUS网导致的责任。</div>
<div>FORTUNEBUS网力图使用户能对本网站进行安全访问和使用，但FORTUNEBUS网不声明也不保证本网站或其服务器是不含病毒或其它潜在有害因素的；因此用户应使用业界公认的软件查杀任何自FORTUNEBUS网下载文件中的病毒。</div>
<div>3、FORTUNEBUS网不对用户所发布信息的保存、修改、删除或储存失败负责。对网站上的非因FORTUNEBUS网故意所导致的排字错误、疏忽等不承担责任。</div>
<div>FORTUNEBUS网有权但无义务，改善或更正本网站任何部分之疏漏、错误。</div>
<div>4、除非FORTUNEBUS网以书面形式明确约定，FORTUNEBUS网对于用户以任何方式（包括但不限于包含、经由、连接或下载）从本网站所获得的任何内容信息，包括但不限于广告等，不保证其准确性、完整性、可靠性；对于用户因本网站上的内容信息而购买、获取的任何产品、服务、信息或资料，FORTUNEBUS网不承担责任。用户自行承担使用本网站信息内容所导致的风险。</div>
<div>5、FORTUNEBUS网内所有用户所发表的用户评论，仅代表用户个人观点，并不表示本网站赞同其观点或证实其描述，本网站不承担用户评论引发的任何法律责任。</div>
<div>6、FORTUNEBUS有权删除FORTUNEBUS网内各类不符合法律或协议规定的信息，而保留不通知用户的权利。</div>
<div>7、所有发给用户的通告，FORTUNEBUS网都将通过正式的页面公告、站内信、电子邮件、客服电话、手机短信或常规的信件送达。任何非经FORTUNEBUS网正规渠道获得的中奖、优惠等活动或信息，FORTUNEBUS网不承担法律责任。</div>
<div>8、FORTUNEBUS有权根据市场情况调整充值、提现、交易等手续费费率，有权决定免费推广期的终止。</div>
<br>
<div>XIII.适用法律和审判地</div>
<div>这些条款和您对服务的使用将受到香港法例的约束和解释，而不诉诸于其冲突法规定。您同意，您根据本条款在法律上或依衡平法追究而不涉及仲裁（如下所述）的行为将仅在马耳他提交，兹此，您不可撤销地和无条件地同意，根据本条款产生的任何诉讼或争议将提交至香港法院专属管辖。</div>
<br>
<div>XIV.仲裁</div>
<div>您和FORTUNEBUS同意仲裁由本条款引起的任何争议或与本服务有关的争议，除非您和FORTUNEBUS不需要仲裁，任何一方就涉嫌非法使用版权，商标，商品名，标识， 商业秘密或专利权的争议寻求衡平的或其他救济。仲裁优先于在法庭起诉或进行陪审团审判。您和FORTUNEBUS同意您将在发生任何争议之后的三十（30）天之内通知对方，您将在提交任何仲裁请求之前尝试非正式解决争议，任何仲裁将在马耳他发生，仲裁将由单一仲裁员保密地进行。您和FORTUNEBUS也同意，马耳他的法院对当事人之间的任何仲裁的上诉以及不受仲裁解决的当事人之间的任何诉讼均具有专属的管辖权。在任何仲裁中，当事人不得相互探寻彼此，仲裁员不得允许当事人探寻彼此；相反，各方应在最终听证会之前的相互同意的时间和日期披露支持其立场的证据。除了以下讨论的程序和补救措施外，仲裁员有权授予若在法庭上起诉也会授予的补救措施。您和我们也不会参与本条款涉及的任何索赔的集体诉讼或集体仲裁。如果FORTUNEBUS是诉讼的一方，您也同意不参与由私人律师或代表身份提出的索赔或涉及另一人的共同索赔。如果发现禁止上述第三方提起的集体诉讼和其他索赔是不可执行的，则该禁止规定视为已从本条款中删除，而与仲裁有关的其他条款应继续有效。</div>
<br>
<div>XV.可分性</div>
<div>如果本协议的任何条款被视为不合法、无效或因任何原因而无法执行，则此等规定应视为可分割，不影响任何其他条款的法律效力。</div>
<br>
<div>XVI.投诉</div>
<div>如果您有任何投诉，反馈或问题，请通过service@fortunebus.io联系我们的客户服务。当您联系我们时，请提供您的姓名和电子邮件地址以及我们可能需要识别您的其他信息，以及您所反馈问题或投诉所涉及的交易信息。</div>
<br>
<div>XVII.其他规定</div>
<div>这些条款规定了双方就服务主题的完整理解，取代了与之有关的所有先前的理解和沟通。 任何与本条款所规定的内容不一致的其他文件，将不对FORTUNEBUS具有约束力。 您声明并保证所有披露给FORTUNEBUS的与本服务条款有关的信息是真实，准确和完整的。</div>

       </div>
       
       


    </el-dialog>
  </div>
</template>
<script>
import valid from '@/utils/valid';
export default {
  data() {
    return {
      dialogFormVisible:false,
      email: '',
      code: '',
      passWord: '',
      confirmPassword: '',
      inviteCode: '',
      agree: false,
      wait: "59",
      content: "获取邮箱验证码",
      canClick: true,
      timer: null,
    }
  },
  methods: {
    showProtocol(){
      this.dialogFormVisible=true
    },
    loadYanzhengma() {
      initNECaptcha({
        captchaId: '1ea48dc26ca240218216696392578acf',
        element: '#register_yanzhengma',
        mode: 'float',
        width: 500,
        onVerify: function(err, ret) {
          if (!err) {
            console.log(ret)
            localStorage.setItem('registerYanzhengma', ret.validate)

            // ret['validate'] 获取二次校验数据
          }
        }
      }, function onload(instance) {
        localStorage.setItem('registerYanzhengma', '')
        // 初始化成功后，用户输入对应用户名和密码，以及完成验证后，直接点击登录按钮即可
      }, function onerror(err) {
        localStorage.setItem('registerYanzhengma', '')
        // 验证码初始化失败处理逻辑，例如：提示用户点击按钮重新初始化
      })

    },
    //是否勾选注册协议
    handleAgree() {
      this.agree = !this.agree
    },
    //邮箱验证
    sendEmail() {
      
      let msg = valid.isEmailValid(this.email);
      if (msg) {
        this.$message({
          message: msg,
          type: 'warning'
        });
        return;
      }
      this.$refs.sendEmail.setAttribute('disabled', 'disabled')
      this.$refs.sendEmail.style.cursor = "not-allowed"
      
      this.$api.emailCode({email: this.email}).then(res=>{
         if (res.message == '成功') {
          //  this.$refs.sendEmail.innerHTML='邮件发送，注意查收'
          if (!this.canClick) return
          this.canClick = false
          this.content = this.wait + 's后重新发送' //这里解决60秒不见了的问题
          let clock = window.setInterval(() => {
            this.wait--
              this.content = this.wait + 's后重新发送'
            if (this.wait < 0) { //当倒计时小于0时清除定时器
              window.clearInterval(clock)
              this.content = '获取邮箱验证码'
              this.wait = 60
              this.canClick = true
              this.$refs.sendEmail.removeAttribute('disabled')
            this.$refs.sendEmail.style.cursor = "pointer"
            }
          }, 1000)
        }
      })

    },

    //密码验证
    blurPassword() {
      let passMsg = valid.isPasswordValid(this.passWord);
      if (passMsg) {
        this.$message({
          message: passMsg,
          type: 'warning'
        });
        return;
      }

    },
    //密码确认验证
    blurConfirmPassword() {
      let passMsg = valid.isPasswordValid(this.passWord);
      if (passMsg) {
        this.$message({
          message: passMsg,
          type: 'warning'
        });
        return;
      }
    },
    //注册
    register() {
      if (this.$refs.isAgree.className == '') {
        this.$message({
          message: '请勾选同意注册协议',
          type: 'warning'
        });
      }

      let msg = valid.isEmailValid(this.email);
      if (msg) {
        this.$message({
          message: msg,
          type: 'warning'
        });
        return;
      }
      if (this.code == '') {
        //    alert("请输入邮箱");
        this.$message({
          message: '邮箱验证码不能为空',
          type: 'warning'
        });
      }

      let passMsg = valid.isPasswordValid(this.passWord);
      if (passMsg) {
        this.$message({
          message: passMsg,
          type: 'warning'
        });
        return;
      }
      if(this.confirmPassword==''){
        this.$message({
          message: '确认密码不能为空',
          type: 'warning'
        });
        return;
      }
      if(this.confirmPassword!==this.passWord){
        this.$message({
          message: '两次输入的密码不一致',
          type: 'warning'
        });
        return;
      }
      this.blurConfirmPassword()
      if(localStorage.getItem('registerYanzhengma')==''){
         this.$message({
          message: '请选择滑动验证码',
          type: 'warning'
        });
      }
      console.log(localStorage.getItem('registerYanzhengma'),'222')
      if(this.email!==''&&this.code!==''&&this.$refs.isAgree.className!==''){
              this.$api.register({email: this.email,
          passWord: this.passWord,
          code: this.code,
          NECaptchaValidate: localStorage.getItem('registerYanzhengma')}).then(res=>{
            var returnData = res.message
             if (returnData == '成功') {
              this.$router.push({ path: "/Login" });
              return
            }
             this.$message({
          message: returnData,
          type: 'warning'
        });
        this.loadYanzhengma()
          })
      }
    }
  },
  mounted() {
    this.loadYanzhengma()
  }
}

</script>
<style lang="less" scoped>
.register-yzm {
  margin-bottom: 20px
}
.protocol{height: 500px;overflow-y: scroll;}
.login-btn{cursor: pointer;}

.register {
  background: #292f37;
  padding:60px 0;
  display: flex;
  align-items: center;
  .container{
    display:flex;
    align-items:center;
    justify-content: space-between;
  }
}

.left {
  margin-right: 10.4%;
  .title {
    display: flex;
    position: relative;
    cursor: pointer;
    opacity: 0.8;
    font-family: "PingFangSC-Regular";
    font-size: 34px;
    color: #FFFFFF;
    margin-bottom: 40px;
    div {
      font-size: 16px;
      color: #4E9DFC;
      position: absolute;
      left: 160px;
      bottom: 9px;
    }
  }
   .select-wrapper {
      font-size: 14px;
      color: #A6A7AD;
      margin-bottom: 17px;
      display:flex;
      justify-content: space-between;
      align-items:center;
      padding-top:30px;
      i {
        margin-right: 8px;
        display: inline-block;
        width: 14px;
        height: 14px;
        background: #d4d5d7;
        cursor: pointer;
        position: relative;
        &.active::after {
          content: "";
          height: 7px;
          left: 5px;
          position: absolute;
          top: 2px;
          width: 3px;
          border-bottom: 1px solid #2286FF;
          border-right: 1px solid #2286FF;
          transform: rotate(38deg);
        }
      }
      span {
        font-size: 14px;
        cursor: pointer;
        color: #4E9DFC;
      }
    }  
  .input-item {
 
    .input-wrapper {
      width: 500px;
      position: relative;
      margin-bottom: 19px;
      .input-btn {
        background: #33383f;
        position: absolute;
        right: 0;
        padding: 0 15px;
        cursor: pointer;
        border: none;
        outline: none;
        width:120px;
        color: #fff;
        position:absolute;
        right:0;
        top:0;
        bottom:0;
        &:hover{
          // background:#2286FF;
          // color:#fff;
        }
      }
      input {
        font-size: 14px;
        color: #A6A7AD;
        width: 100%
      }
    }
  }
  .register-btn {
    background: #2286FF;
    cursor: pointer;
    border-radius: 2px;
    font-size: 16px;
    color: #FFFFFF;
    height: 48px;
    line-height: 48px;
    text-align: center
  }
}

.right {
  flex: 1;
  text-align: right;
}

</style>
