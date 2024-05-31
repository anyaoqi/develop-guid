import{_ as s,c as a,o as i,a1 as n}from"./chunks/framework.Dtl2lYvd.js";const g=JSON.parse('{"title":"命名规范","description":"","frontmatter":{},"headers":[],"relativePath":"docs/命名规范.md","filePath":"docs/命名规范.md"}'),e={name:"docs/命名规范.md"},t=n(`<h1 id="命名规范" tabindex="-1">命名规范 <a class="header-anchor" href="#命名规范" aria-label="Permalink to &quot;命名规范&quot;">​</a></h1><h2 id="项目和目录" tabindex="-1">项目和目录 <a class="header-anchor" href="#项目和目录" aria-label="Permalink to &quot;项目和目录&quot;">​</a></h2><h3 id="项目命名" tabindex="-1">项目命名 <a class="header-anchor" href="#项目命名" aria-label="Permalink to &quot;项目命名&quot;">​</a></h3><p>全部采用小写，中间用横岗分割，例如：<code>my-project-name</code></p><h3 id="组件命名" tabindex="-1">组件命名 <a class="header-anchor" href="#组件命名" aria-label="Permalink to &quot;组件命名&quot;">​</a></h3><ul><li><p>组件名称使用<strong>大驼峰命名</strong></p></li><li><p>例如：<code>ComponentName.vue</code>、<code>components/ComponentName/ComponentName.vue</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ComponentName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/components/ComponentName/ComponentName.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ComponentName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ul><h3 id="页面命名" tabindex="-1">页面命名 <a class="header-anchor" href="#页面命名" aria-label="Permalink to &quot;页面命名&quot;">​</a></h3><p>页面名称使用小驼峰命名，例如：<code>pageName.vue</code></p><p>页面文件夹应遵守小驼峰命名，例如：<code>pageName/pageName.vue</code></p><h3 id="api命名" tabindex="-1">Api命名 <a class="header-anchor" href="#api命名" aria-label="Permalink to &quot;Api命名&quot;">​</a></h3><p>api文件使用小驼峰命名，例如：<code>apiModule.js</code></p><h3 id="hook命名" tabindex="-1">Hook命名 <a class="header-anchor" href="#hook命名" aria-label="Permalink to &quot;Hook命名&quot;">​</a></h3><ul><li>文件命名使用小驼峰命名，use开头+模块名称，例如：useLogin.js</li><li>文件内可以包含多个hook方法, hook方法名称以use开头，使用export导出</li></ul><hr><h2 id="javascript命名规范" tabindex="-1">JavaScript命名规范 <a class="header-anchor" href="#javascript命名规范" aria-label="Permalink to &quot;JavaScript命名规范&quot;">​</a></h2><h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h3><p>变量使用小驼峰命名，例如：<code>const userName = &#39;hello&#39;</code></p><h3 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h3><p>常量使用全大写，中间下划线分割，例如：<code>const USER_NAME = &#39;hello word&#39;</code></p><h3 id="对象、函数、和实例" tabindex="-1">对象、函数、和实例 <a class="header-anchor" href="#对象、函数、和实例" aria-label="Permalink to &quot;对象、函数、和实例&quot;">​</a></h3><p>对象、函数、和实例采用小驼峰命名</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isObject </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isFun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 实例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myBbj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="类、构造函数" tabindex="-1">类、构造函数 <a class="header-anchor" href="#类、构造函数" aria-label="Permalink to &quot;类、构造函数&quot;">​</a></h3><p>类和构造函数采用大驼峰命名</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 类</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Point</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 构造函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options.name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,25),l=[t];function h(p,k,o,r,d,c){return i(),a("div",null,l)}const u=s(e,[["render",h]]);export{g as __pageData,u as default};
