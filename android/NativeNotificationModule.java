package com.reactnativepush;

import android.widget.Toast;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class NativeNotificationModule extends ReactContextBaseJavaModule {

    NativeNotificationModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "NativeNotification";
    }

    @ReactMethod
    public void showNotification(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
    }
}
