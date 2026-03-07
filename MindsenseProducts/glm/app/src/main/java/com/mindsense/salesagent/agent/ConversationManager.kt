package com.mindsense.salesagent.agent

import android.content.Context
import android.content.SharedPreferences

class ConversationManager(context: Context) {

    private val prefs: SharedPreferences =
        context.getSharedPreferences("sales_leads", Context.MODE_PRIVATE)

    fun getLeadState(contactId: String): SalesState {
        val name = prefs.getString(contactId, SalesState.NEW.name)
        return try {
            SalesState.valueOf(name ?: SalesState.NEW.name)
        } catch (e: Exception) {
            SalesState.NEW
        }
    }

    fun updateLeadState(contactId: String, newState: SalesState) {
        prefs.edit().putString(contactId, newState.name).apply()
    }

    fun advanceLead(contactId: String) {
        val current = getLeadState(contactId)
        val states = SalesState.values()
        val next = current.ordinal + 1
        if (next < states.size) {
            updateLeadState(contactId, states[next])
        }
    }

    fun setLeadStateByOrdinal(contactId: String, ordinal: Int) {
        val states = SalesState.values()
        if (ordinal in states.indices) {
            updateLeadState(contactId, states[ordinal])
        }
    }

    fun getResponseForState(contactId: String, displayName: String): String {
        return getLeadState(contactId).stageResponse.replace("{name}", displayName)
    }

    fun getAllLeads(): Map<String, SalesState> {
        return prefs.all.mapNotNull { (k, v) ->
            val state = try {
                SalesState.valueOf(v as String)
            } catch (e: Exception) {
                null
            }
            if (state != null) k to state else null
        }.toMap()
    }
}
