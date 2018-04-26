"use strict";
/**
 ** Mailer Module
 **
 ** @version 0.0.1
 **
 */

var mailer = module.exports;

var nodemailer = require('nodemailer');

var fs = require('fs');

const init_config = JSON.parse(fs.readFileSync(`${__dirname}/../../../config.json`));

var mailer_config = {
  host : init_config.mail_host ,
  port : init_config.mail_port ,
  auth : {
    user : init_config.mail_auth_user ,
    pass : init_config.mail_auth_pass
  }
};

var transporter = nodemailer.createTransport(mailer_config);

/**
 ** Send Reg Verification Code
 **
 ** @param to_user
 ** @param vcode
 ** @param callback
 **
 */

mailer.SendRegVcode = function(to_user, vcode, callback){
  var mail_content = {
    from : 'WebMaster <webmaster@example.com>',
    subject : '用户注册验证码',
    to: to_user,
    html: '<h1>注册验证码</h1><br/><p>这封信是由 凌睿工作室答题系统 自动发送的。</p><p>您收到这封邮件，是由于在 答题系统 获取了新用户注册地址使用了这个邮箱地址。如果您并没有访问过 答题系统，或没有进行上述操作，请忽略这封邮件。您不需要退订或进行其他进一步的操作。</p><br/>----------------------------------------------------------------------<br/><strong>新用户注册验证码</strong><br/><br/><b style="color:green;">'+ vcode +'</b><br><br>请注意，验证码将在30分钟后过期，请尽快验证注册！<br/>----------------------------------------------------------------------<br/><br/><p>如果您是 凌睿工作室答题系统 的新用户，我们需要对您的地址有效性进行验证以避免垃圾邮件或地址被滥用。</p><p>感谢您的访问，祝您使用愉快！</p><p>此致<br/>凌睿工作室 管理团队.<br/>https://www.lrworkshop.xin</p>'
  };
  transporter.sendMail(mail_content, function(err, info){
        if(err) callback(err);
        callback(null,info.response);
        //console.log('mail sent:', info.response);
    });
}

/**
 ** Send Revert Password Verification Code
 **
 ** @param to_user
 ** @param vcode
 ** @param callback
 **
 */

mailer.SendRevertPasswordVcode = function(to_user, vcode, callback){
  var mail_content = {
    from : 'WebMaster <webmaster@example.com>',
    subject : '找回密码验证码',
    to: to_user,
    html: '<h1>找回密码验证码</h1><br/><p>这封信是由 凌睿工作室答题系统 自动发送的。</p><p>您收到这封邮件，是由于在 答题系统 申请了用户密码重置。如果您并没有访问过 答题系统，或没有进行上述操作，请忽略这封邮件。您不需要退订或进行其他进一步的操作。</p><br/>----------------------------------------------------------------------<br/><strong>密码重置验证码</strong><br/><br/><b style="color:green;">'+ vcode +'</b><br><br>请注意，验证码将在30分钟后过期，请尽快验证！<br/>----------------------------------------------------------------------<br/><br/><p>如果您是 凌睿工作室答题系统 的用户，我们需要对您的身份有效性进行验证以保障您的账号安全。</p><p>感谢您的配合，祝您使用愉快！</p><p>此致<br/>凌睿工作室 管理团队.<br/>https://www.lrworkshop.xin</p>'
  };
  transporter.sendMail(mail_content, function(err, info){
        if(err) callback(err);
        callback(null,info.response);
        //console.log('mail sent:', info.response);
    });
}
