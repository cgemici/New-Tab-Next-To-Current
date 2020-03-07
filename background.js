browser.commands.onCommand.addListener(async (command) => {
  if (command === "new-tab-next-to-current") {
    let tabs = await browser.tabs.query({active: true, currentWindow: true});
    let activeTab = tabs[0];
    if (activeTab) {
      let newTab = await browser.tabs.create({index: activeTab.index + 1});
    }
  }
});