import React from 'react';

const SkillsMarquee = () => {
  const skills = [
    {
        name: 'Docusaurus',
        category: 'Tools',
        color: '#2E8555',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.374 0 12c0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.626-5.373-12-12-12zm.906 4.369c3.351 0 6.072 2.721 6.072 6.072s-2.721 6.072-6.072 6.072H6.072A6.072 6.072 0 0 1 0 10.441c0-3.351 2.721-6.072 6.072-6.072h6.834z"/>
          </svg>
        )
      },
      {
        name: 'Hugo',
        category: 'Tools',
        color: '#FF4088',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M11.754 0a3.998 3.998 0 0 0-2.049.596L3.33 4.532a4.001 4.001 0 0 0-2.017 3.474v8.47c0 1.452.788 2.79 2.049 3.497l6.346 3.91a4.001 4.001 0 0 0 4.098 0l6.346-3.91a4.001 4.001 0 0 0 2.049-3.497v-8.47a4.001 4.001 0 0 0-2.017-3.474l-6.346-3.936A4.001 4.001 0 0 0 11.754 0z"/>
          </svg>
        )
      },
      {
        name: 'README',
        category: 'Tools',
        color: '#00A98F',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm2 2h12v2H6V7zm0 4h12v2H6v-2zm0 4h8v2H6v-2z"/>
          </svg>
        )
      },
      {
        name: 'MkDocs',
        category: 'Tools',
        color: '#2094F3',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M2.5 4.5C2.5 3.12 3.62 2 5 2h14c1.38 0 2.5 1.12 2.5 2.5v15c0 1.38-1.12 2.5-2.5 2.5H5c-1.38 0-2.5-1.12-2.5-2.5v-15zm2 0v15c0 .28.22.5.5.5h14c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5H5c-.28 0-.5.22-.5.5zm2 2h12v2H6.5v-2zm0 4h12v2H6.5v-2zm0 4h12v2H6.5v-2z"/>
          </svg>
        )
      },
      {
        name: 'Docsify',
        category: 'Tools',
        color: '#43853D',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
          </svg>
        )
      },
      {
        name: 'Swagger',
        category: 'Tools',
        color: '#85EA2D',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.616 0 12-5.383 12-12S18.616 0 12 0zm0 1.75c5.673 0 10.25 4.577 10.25 10.25S17.673 22.25 12 22.25 1.75 17.673 1.75 12 6.327 1.75 12 1.75zM6.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
          </svg>
        )
      },
      {
        name: 'Postman',
        icon: (
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#FF6C37">
            <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"/>
          </svg>
        ),
        category: 'Tools'
      },
      {
        name: 'GitLab',
        category: 'Cloud',
        color: '#FC6D26',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.386 9.45.044 13.587a.924.924 0 0 0 .331 1.03L12 23.054l11.625-8.436a.92.92 0 0 0 .33-1.031"/>
          </svg>
        )
      },
      {
        name: 'AWS',
        category: 'Cloud',
        color: '#FF9900',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.359.056.535.096.168.048.327.096.487.144.16.048.288.096.383.144a.807.807 0 0 1 .279.192.507.507 0 0 1 .072.272v.375c0 .167-.064.247-.184.247-.063 0-.176-.04-.328-.112a2.958 2.958 0 0 0-1.502-.328c-.456 0-.807.071-1.056.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.216.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.060-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/>
          </svg>
        )
      },
      {
        name: 'Version Control',
        category: 'Tools',
        color: '#F05032',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
          </svg>
        )
      },  
      {
        name: 'VuePress',
        category: 'Tools',
        color: '#4FC08D',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zm-18.24 2h3.6l6.64 11.5 6.64-11.5h3.6L12 19.83z"/>
          </svg>
        )
      },
      {
        name: 'Astro',
        category: 'Tools',
        color: '#FF5D01',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.632-4.187-1.483-.161.488-.198 1.046-.198 1.402 0 0-.106 1.75 1.111 2.968 0-.632.513-1.145 1.145-1.145 1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582M8.977 12.385c-.09.204-.322.224-.483.144-.16-.079-.212-.31-.12-.513.09-.204.321-.223.482-.144.161.08.212.31.121.513m2.87-2.003c.089-.204.321-.223.482-.144.16.08.212.31.121.513-.09.204-.322.224-.483.144-.16-.079-.212-.31-.12-.513"/>
            <path d="M23.505 7.118c-.559-2.353-3.005-4.823-6.557-4.823-3.386 0-6.23 2.243-6.542 4.735-.58-.138-1.162-.138-1.74 0-.313-2.492-3.156-4.735-6.542-4.735-3.552 0-5.998 2.47-6.557 4.823-.005.174-.005.348.001.522.043 1.211.557 2.343 1.325 3.157 1.253 1.33 2.832 2.387 4.393 3.137 1.571.757 3.245 1.18 4.984 1.18 1.74 0 3.413-.423 4.984-1.18 1.561-.75 3.14-1.807 4.393-3.137.768-.814 1.282-1.946 1.325-3.157.006-.174.006-.348.001-.522"/>
          </svg>
        )
      },
      // Technologies
      {
        name: 'YAML',
        category: 'Technologies',
        color: '#0088CC',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1 2v4h2V4H5m3 0v4h2V4H8m3 0v4h2V4h-2z"/>
          </svg>
        )
      },
      {
        name: 'JSON',
        category: 'Technologies',
        color: '#000000',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m3.5 14.6c0 1.2-.4 2.2-1.2 2.9-.8.7-1.9 1-3.3 1-.7 0-1.3-.1-1.9-.2-.6-.2-1.1-.4-1.5-.7v-2.7c.5.3 1 .6 1.6.8.6.2 1.1.3 1.7.3.6 0 1-.1 1.3-.3.3-.2.4-.5.4-.9 0-.2 0-.4-.1-.5-.1-.2-.2-.3-.4-.4-.2-.1-.4-.2-.6-.3-.2-.1-.5-.2-.9-.3-.8-.3-1.4-.7-1.8-1.2-.4-.5-.6-1.1-.6-1.9 0-1.1.4-2 1.1-2.6.8-.6 1.8-.9 3.1-.9.6 0 1.2.1 1.7.2s1 .3 1.4.5l-.7 2.1c-.4-.2-.8-.4-1.3-.5-.4-.1-.8-.2-1.2-.2-.5 0-.8.1-1.1.3-.2.2-.3.5-.3.8 0 .2 0 .4.1.5.1.1.2.3.3.4.2.1.3.2.6.3.2.1.5.2.9.3.9.3 1.5.7 1.9 1.2.4.5.7 1.2.7 2"/>
          </svg>
        )
      },
      {
        name: 'Markdown',
        category: 'Technologies',
        color: '#000000',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6h17.12c.79 0 1.44.63 1.44 1.41v9.18c0 .78-.65 1.41-1.44 1.41M6.81 15.19v-3.66l1.92 2.35l1.92-2.35v3.66h1.93V8.81h-1.93l-1.92 2.35l-1.92-2.35H4.89v6.38h1.92M19.69 12h-1.93V8.81h-1.92V12h-1.93l2.89 3.28L19.69 12z"/>
          </svg>
        )
      },
      {
        name: 'HTML',
        category: 'Technologies',
        color: '#E34F26',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
          </svg>
        )
      },
      {
        name: 'AsciiDoc',
        category: 'Technologies',
        color: '#333333',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M2.75 5.5c0-.966.784-1.75 1.75-1.75h15c.966 0 1.75.784 1.75 1.75v13c0 .966-.784 1.75-1.75 1.75h-15a1.75 1.75 0 01-1.75-1.75v-13zm1.75-.25a.25.25 0 00-.25.25v13c0 .138.112.25.25.25h15a.25.25 0 00.25-.25v-13a.25.25 0 00-.25-.25h-15z"/>
            <path d="M6 7.75A.75.75 0 016.75 7h10.5a.75.75 0 110 1.5H6.75A.75.75 0 016 7.75zm0 4a.75.75 0 01.75-.75h10.5a.75.75 0 110 1.5H6.75a.75.75 0 01-.75-.75zm0 4a.75.75 0 01.75-.75h4.5a.75.75 0 110 1.5h-4.5a.75.75 0 01-.75-.75z"/>
          </svg>
        )
      },
    {
      name: 'Docker',
      category: 'Cloud',
      color: '#2496ED',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
        </svg>
      )
    },
    {
        name: 'Kubernetes',
        category: 'Cloud',
        color: '#326CE5',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm0 22.313c-5.683 0-10.313-4.63-10.313-10.313S6.317 1.687 12 1.687 22.313 6.317 22.313 12 17.683 22.313 12 22.313z" />
            <path d="M12 4.876l.594 5.531 4.437-2.58-.594 3.06 3.66 2.154-3.66 2.154.594 3.06-4.437-2.58-.594 5.531-.594-5.531-4.437 2.58.594-3.06-3.66-2.154 3.66-2.154-.594-3.06 4.437 2.58z" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        )
      },      
    {
      name: 'GitHub',
      category: 'Cloud',
      color: '#181717',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Enhanced gradient overlays for smoother fade effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent" />
      
      {/* Scrolling content with improved spacing and animation */}
      <div className="flex animate-[marquee_7s_linear_infinite] whitespace-nowrap">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="mx-8 flex flex-col items-center justify-center rounded-xl bg-gray-800/50 p-6 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-gray-700/50"
          >
            <div className="text-white transition-colors duration-200" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className="mt-3 text-sm font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;