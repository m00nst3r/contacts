package com.contacts.androidBrowser;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends Activity {
    private WebView browser;
    private WebSettings browserSettings;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        browser = (WebView)findViewById(R.id.browser);
        browser.setWebViewClient(new JsBrowserViewClient());
        browserSettings = browser.getSettings();
        browserSettings.setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);
        browserSettings.setJavaScriptEnabled(true);
        Uri uri = Uri.parse("http://localhost:63342/template/userlist.html");
        browser.loadUrl(uri.toString());
    }
}
