// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

    private ArrayList<String> funMessages;

    public void init() {
        funMessages = new ArrayList<>();

        funMessages.add("Henlo");
        funMessages.add("Nalonalotulonie");
        funMessages.add("I eat rocks.");
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String greeting = "<h1>Hello Pablo!</h1>";
        String message = funMessages.get((int) (Math.random() * funMessages.size()));
        String json = convertToJson(funMessages);
        

        response.setContentType("text/html;");
        response.getWriter().println(json);
        response.getWriter().println(message);
    }

    // Converts ArrayList of Strings into JSON using Gson.
    private String convertToJson(ArrayList<String> funMessages) {
        String json = new Gson().toJson(funMessages);
        return json;
    }
}
